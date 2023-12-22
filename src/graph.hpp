#pragma once

#include <optional>
#include <sstream>
#include <memory>
#include <unordered_map>


#include "edge.hpp"
#include "node.hpp"
#include "utils.hpp"
#include "uuid.hpp"

using namespace std;

namespace K {
    class Graph {
    public:
        bool new_node(K::Node& n);

        K::Edge* new_edge(const string& label, const string& info,
                          const string& fromId, const string& toId);

        bool erase_node(K::Node& n);
        shared_ptr<K::Edge> erase_edge(const string& id);

        size_t nodes_size() const { return nodes_.size(); }

        size_t edges_size() const { return edges_.size(); }

        void clear_nodes() { nodes_.clear(); }

        void clear_edges() { edges_.clear(); }

        void clear() {
            clear_nodes();
            clear_edges();
        }


        friend std::ostream& operator<<(std::ostream& os, const Graph& obj) {
            os << "Graph\nNodes:\n" << obj.nodes_
               << "\nEdges:\n" << obj.edges_;
            return os;
        }


    private:
        unordered_map<string, Node> nodes_;
        unordered_map<string, Edge> edges_;
        K::UuidFactory uuid_factory_;
    };
}

// std::ostream& operator<<(std::ostream& os, const K::Graph& obj) {
//     os << "Graph\nNodes: " << obj.nodes_;
//     return os;
// }

// std::unordered_map<string, Node>::node_type
// eraseNode(const string& id) {
//     auto nh = nodes_.extract(id);
//     if (!nh.empty()) {
//         for (const auto& eid : nh.mapped().edges_) {
//             eraseEdge(eid);
//         }
//     }

//     return nh;
// }

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