#include "graph.hpp"

#include <iostream>

#ifndef TESTS
#include "bindings.hpp"
#endif

K::Graph& K::Graph::get_instance() {
    static K::Graph gg{};
    return gg;
}

void K::Graph::add_event(shared_ptr<K::Event> e) {
    events_.erase(pos_, events_.end());
    events_.push_back(e);
    pos_ = prev(events_.end());
    redo();
}

void K::Graph::redo() {
    bool cont = true;
    while (cont && pos_ != events_.end()) {
        auto e = (*pos_);
        e->apply(*this);
        cont = e->is_triggered_;
        ++pos_;
        events_.erase(prev(pos_));
    }
}

void K::Graph::undo() {
    if (pos_ == events_.begin())
        return;

    auto p = prev(pos_);
    bool is_first = true;
    while (is_first || (*p)->is_triggered_) {
        is_first = false;
        (*p)->apply(*this);
        pos_ = next(p);
        if (p == events_.begin()) {
            events_.erase(p);
            return;
        }
        --p;
        events_.erase(next(p));
    }
}

const K::Node* K::Graph::get_node(const string& id) const {
    auto it = nodes_.find(id);
    return (it == nodes_.end()) ? nullptr : &it->second;
}

const K::Edge* K::Graph::get_edge(const string& id) const {
    auto it = edges_.find(id);
    return (it == edges_.end()) ? nullptr : &it->second;
}

void K::Graph::new_node(K::NewNodeEvent& e) {
    auto& q = e.n_;
    if (q.id_.empty()) {
        q.id_ = uuid_factory_.generate();
        q.label_ = "New Node";
    }
    nodes_[q.id_] = q;

#ifndef TESTS
    // emit js
    K::updateNodeJ(q.id_, q.label_, q.x_, q.y_);
#endif

    auto p = make_shared<K::EraseNodeEvent>(q, e.is_triggered_);
    events_.insert(pos_, p);
}

void K::Graph::new_edge(K::NewEdgeEvent& e) {
    auto& q = e.e_;
    auto fromIt = nodes_.find(q.from_);
    auto toIt = nodes_.find(q.to_);
    if (fromIt == nodes_.end() || toIt == nodes_.end())
        return;

    if (q.id_.empty()) {
        q.id_ = uuid_factory_.generate();
        q.label_ = "New Edge";
        q.is_to_plug_ = true;
    }

    edges_[q.id_] = q;
    fromIt->second.edges_.insert(q.id_);
    toIt->second.edges_.insert(q.id_);

#ifndef TESTS
    // emit js
    K::updateEdgeJ(q.id_, q.label_, q.from_, q.to_, q.is_from_plug_,
                   q.is_to_plug_);
#endif

    auto p = make_shared<K::EraseEdgeEvent>(q, e.is_triggered_);
    events_.insert(pos_, p);
}

void K::Graph::erase_node(K::EraseNodeEvent& e) {
    auto& q = e.n_;
    auto nh = nodes_.extract(q.id_);
    if (nh.empty())
        return;
    q = nh.mapped();

    for (const auto& eid : q.edges_) {
        K::EraseEdgeEvent p(eid, true);
        erase_edge(p);
    }

#ifndef TESTS
    // emit js
    K::eraseNodeJ(q.id_);
#endif

    // we do not need the edges to create the node
    q.edges_.clear();
    auto p = make_shared<K::NewNodeEvent>(q, e.is_triggered_);
    events_.insert(pos_, p);
}

void K::Graph::erase_edge(K::EraseEdgeEvent& e) {
    auto& q = e.e_;
    auto nh = edges_.extract(q.id_);
    if (nh.empty())
        return;
    q = nh.mapped();
    auto fromIt = nodes_.find(q.from_);
    if (fromIt != nodes_.end()) {
        fromIt->second.edges_.erase(q.id_);
    }
    auto toIt = nodes_.find(q.to_);
    if (toIt != nodes_.end()) {
        toIt->second.edges_.erase(q.id_);
    }

#ifndef TESTS
    // emit js
    K::eraseEdgeJ(q.id_);
#endif

    auto p = make_shared<K::NewEdgeEvent>(q, e.is_triggered_);
    events_.insert(pos_, p);
}

unordered_set<string>
K::Graph::get_connected_edges(const vector<string>& v) const {
    unordered_set<string> ans;
    for (const auto& i : v) {
        auto it = nodes_.find(i);
        if (it != nodes_.end()) {
            ans.insert(it->second.edges_.begin(), it->second.edges_.end());
        }
    }
    return ans;
}

void K::Graph::move_node(K::MoveNodeEvent& e) {
    auto it = nodes_.find(e.id_);
    if (it == nodes_.end()) {
        return;
    }

    auto& q = it->second;

    if (is_close(e.x_, q.x_, 5) || is_close(e.y_, q.y_, 5))
        return;
    swap(e.x_, q.x_);
    swap(e.y_, q.y_);

#ifndef TESTS
    // emit js
    for (const auto& eid : q.edges_) {
        auto eit = edges_.find(eid);
        if (eit != edges_.end()) {
            auto& eq = eit->second;
            K::updateEdgeJ(eq.id_, eq.label_, eq.from_, eq.to_,
                           eq.is_from_plug_, eq.is_to_plug_);
        }
    }
    K::updateNodeJ(q.id_, q.label_, q.x_, q.y_);
#endif

    auto p = make_shared<K::MoveNodeEvent>(e);
    events_.insert(pos_, p);
}

void K::Graph::flip_edge_plug(K::FlipEdgePlugEvent& e) {
    auto it = edges_.find(e.id_);
    if (it == edges_.end()) {
        return;
    }

    auto& q = it->second;

    auto& plug = e.is_from_ ? q.is_from_plug_ : q.is_to_plug_;
    plug = !plug;

#ifndef TESTS
    // emit js
    K::updateEdgeJ(q.id_, q.label_, q.from_, q.to_, q.is_from_plug_,
                   q.is_to_plug_);
#endif

    auto p = make_shared<K::FlipEdgePlugEvent>(e);
    events_.insert(pos_, p);
}

void K::Graph::update_node_data(K::UpdateNodeDataEvent& e) {
    auto it = nodes_.find(e.id_);
    if (it == nodes_.end()) {
        return;
    }

    auto& q = it->second;

    swap(e.label_, q.label_);
    swap(e.info_, q.info_);

#ifndef TESTS
    K::updateNodeJ(q.id_, q.label_, q.x_, q.y_);
#endif

    auto p = make_shared<K::UpdateNodeDataEvent>(e);
    events_.insert(pos_, p);
}

void K::Graph::update_edge_data(K::UpdateEdgeDataEvent& e) {
    auto it = edges_.find(e.id_);
    if (it == edges_.end()) {
        return;
    }

    auto& q = it->second;

    swap(e.label_, q.label_);
    swap(e.info_, q.info_);

#ifndef TESTS
    K::updateEdgeJ(q.id_, q.label_, q.from_, q.to_, q.is_from_plug_,
                   q.is_to_plug_);
#endif

    auto p = make_shared<K::UpdateEdgeDataEvent>(e);
    events_.insert(pos_, p);
}