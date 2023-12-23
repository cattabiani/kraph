

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

    bool Graph::new_edge(K::Edge& e) {

        auto fromIt = nodes_.find(e.from_);
        if (fromIt == nodes_.end()) {
            return false;
        }
        auto toIt = nodes_.find(e.to_);
        if (toIt == nodes_.end()) {
            return false;
        }

        if (e.id_.empty()) {
            e.id_ = uuid_factory_.generate();
            e.label_ = "New Edge";
            e.info_ = "";
            e.is_from_plug_ = false;
            e.is_to_plug_ = true;
        }
        edges_[e.id_] = e;
        fromIt->second.edges_.insert(e.id_);
        toIt->second.edges_.insert(e.id_);
        return true;
    }

    bool Graph::erase_edge(K::Edge& e) {
        auto nh = edges_.extract(e.id_);
        if (nh.empty()) {
            return false;
        }

        auto fromIt = nodes_.find(nh.mapped().from_);
        if (fromIt != nodes_.end()) {
            fromIt->second.edges_.erase(e.id_);
        }

        auto toIt = nodes_.find(nh.mapped().to_);
        if (toIt != nodes_.end()) {
            toIt->second.edges_.erase(e.id_);
        }

        e = nh.mapped();
        return true;
    }

    K::Node* Graph::move_node(const string& id, int& x, int& y) {
        auto it = nodes_.find(id);
        if (it == nodes_.end()) {
            return nullptr;
        }

        swap(it->second.x_, x);
        swap(it->second.y_, y);
        return &it->second;
    }

    K::Node* Graph::update_data_node(const string& id, string& label,
                                     string& info) {
        auto it = nodes_.find(id);
        if (it == nodes_.end()) {
            return nullptr;
        }

        swap(it->second.label_, label);
        swap(it->second.info_, info);
        return &it->second;
    }

    bool Graph::erase_node(K::Node& n) {
        auto nh = nodes_.extract(n.id_);
        if (!nh.empty()) {
            for (const auto& eid : nh.mapped().edges_) {
                auto e = K::Edge(eid);
                erase_edge(e);
            }
            n = nh.mapped();
            return true;
        }
        return false;
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
