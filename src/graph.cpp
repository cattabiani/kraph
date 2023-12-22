

#include "graph.hpp"

namespace K {

    bool Graph::new_node(K::Node& n) {
        if (n.id_.empty()) {
            n.id_ = uuid_factory_.generate();
            n.label_ = "New Node";
            n.info_ = "";
        }
        nodes_[n.id_] = n;
        return true;
    }

    K::Edge* Graph::new_edge(const string& label, const string& info,
                             const string& fromId, const string& toId) {

        auto fromIt = nodes_.find(fromId);
        if (fromIt == nodes_.end()) {
            return nullptr;
        }
        auto toIt = nodes_.find(toId);
        if (toIt == nodes_.end()) {
            return nullptr;
        }
        auto id = uuid_factory_.generate();
        fromIt->second.edges_.insert(id);
        toIt->second.edges_.insert(id);
        return &edges_
                    .emplace(piecewise_construct, make_tuple(id),
                             make_tuple(id, label, info, fromId, toId))
                    .first->second;
    }

    bool Graph::erase_node(K::Node& n) {
        auto nh = nodes_.extract(n.id_);
        if (!nh.empty()) {
            for (const auto& eid : nh.mapped().edges_) {
                erase_edge(eid);
            }
            n = nh.mapped();
            return true;
        }
        return false;
    }

    shared_ptr<K::Edge> Graph::erase_edge(const string& id) {
        auto nh = edges_.extract(id);
        if (nh.empty()) {
            return nullptr;
        }

        auto fromIt = nodes_.find(nh.mapped().from_);
        if (fromIt != nodes_.end()) {
            fromIt->second.edges_.erase(id);
        }

        auto toIt = nodes_.find(nh.mapped().to_);
        if (toIt != nodes_.end()) {
            toIt->second.edges_.erase(id);
        }

        return make_shared<K::Edge>(nh.mapped());
    }

    // bool moveNode(const string& id, const int dx, const int dy) {
    //     auto it = nodes_.find(id);
    //     if (it == nodes_.end()) {
    //         return false;
    //     }
    //     auto& node = it->second;
    //     node.x_ += dx;
    //     node.y_ += dy;

    //     return true;
    // }

    // const K::Node* getNode(const string& id) {
    //     auto it = nodes_.find(id);
    //     if (it != nodes_.end()) {
    //         return &(it->second);
    //     }
    //     return nullptr;
    // }

    // const K::Edge* getEdge(const string& id) {
    //     auto it = edges_.find(id);
    //     if (it != edges_.end()) {
    //         return &(it->second);
    //     }
    //     return nullptr;
    // }

    // const K::Node* updateNode(const string& id, const string& label,
    //                           const string& info) {
    //     auto it = nodes_.find(id);
    //     if (it != nodes_.end()) {
    //         auto& n = it->second;

    //         n.label_ = label;
    //         n.info_ = info;

    //         return &(n);
    //     }
    //     return nullptr;
    // }

    // const K::Edge* updateEdge(const string& id, const string& label,
    //                           const string& info) {
    //     auto it = edges_.find(id);
    //     if (it != edges_.end()) {
    //         auto& e = it->second;

    //         e.label_ = label;
    //         e.info_ = info;

    //         return &(e);
    //     }
    //     return nullptr;
    // }

}
