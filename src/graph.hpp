#pragma once

#include <sstream>
#include <unordered_map>

#include "edge.hpp"
#include "node.hpp"
#include "uuid.hpp"

using namespace std;

namespace K {
    class Graph {
    public:
        const K::Node& newNode(const string& label, const string& info,
                               const int x, const int y) {
            auto id = uuid_factory_.generateNewUuid();
            return nodes_
                .emplace(piecewise_construct, make_tuple(id),
                         make_tuple(id, label, info, x, y))
                .first->second;
        }

        K::Edge* newEdge(const string& label, const string& info,
                         const string& fromId, const string& toId) {

            auto fromIt = nodes_.find(fromId);
            if (fromIt == nodes_.end()) {
                return nullptr;
            }
            auto toIt = nodes_.find(toId);
            if (toIt == nodes_.end()) {
                return nullptr;
            }
            auto id = uuid_factory_.generateNewUuid();
            fromIt->second.edges_.insert(id);
            toIt->second.edges_.insert(id);
            return &(edges_
                         .emplace(piecewise_construct, make_tuple(id),
                                  make_tuple(id, label, info, fromId, toId))
                         .first->second);
        }

        bool removeEdge(const string& id) {
            auto nh = edges_.extract(id);
            if (nh.empty()) {
                return false;
            }

            auto fromIt = nodes_.find(nh.key());
            if (fromIt != nodes_.end()) {
                fromIt->second.edges_.erase(id);
            }

            auto toIt = nodes_.find(nh.key());
            if (toIt != nodes_.end()) {
                toIt->second.edges_.erase(id);
            }

            return true;
        }

        bool removeNode(const string& id) {
            auto nh = nodes_.extract(id);
            if (nh.empty()) {
                return false;
            }

            for (const auto& eid : nh.mapped().edges_) {
                removeEdge(eid);
            }

            return true;
        }

        bool moveNode(const string& id, const int x, const int y) {
            auto it = nodes_.find(id);
            if (it == nodes_.end()) {
                return false;
            }
            auto& node = it->second;
            node.x_ = x;
            node.y_ = y;

            return true;
        }

        const K::Node* getNode(const string& id) {
            auto it = nodes_.find(id);
            if (it != nodes_.end()) {
                return &(it->second);
            }
            return nullptr;
        }

        const K::Edge* getEdge(const string& id) {
            auto it = edges_.find(id);
            if (it != edges_.end()) {
                return &(it->second);
            }
            return nullptr;
        }

        const K::Node* updateNode(const string& id, const string& label,
                                  const string& info) {
            auto it = nodes_.find(id);
            if (it != nodes_.end()) {
                auto& n = it->second;

                n.label_ = label;
                n.info_ = info;

                return &(n);
            }
            return nullptr;
        }

        const K::Edge* updateEdge(const string& id, const string& label,
                                  const string& info) {
            auto it = edges_.find(id);
            if (it != edges_.end()) {
                auto& e = it->second;

                e.label_ = label;
                e.info_ = info;

                return &(e);
            }
            return nullptr;
        }

        size_t nodesSize() const { return nodes_.size(); }

        size_t edgesSize() const { return edges_.size(); }

        void clearNodes() { nodes_.clear(); }

        void clearEdges() { edges_.clear(); }

        void clear() {
            clearNodes();
            clearEdges();
        }

    private:
        unordered_map<string, Node> nodes_;
        unordered_map<string, Edge> edges_;
        K::UuidFactory uuid_factory_;
    };
}
