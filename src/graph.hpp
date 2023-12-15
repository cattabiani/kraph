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
        Graph(const Graph&) = delete;
        Graph& operator=(const Graph&) = delete;

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
            auto e = edges_.emplace(piecewise_construct, make_tuple(id), make_tuple(id, label, info, fromId, toId));
            return &e;
        }


        bool moveNode(const string& id, const int x, const int y) {
            auto it = nodes_.find(id);
            if (it == nodes_.end()) {
                return true;
            }
            auto& node = it->second;
            node.x_ = x;
            node.y_ = y;

            return false;
        }

        const K::Node* getNode(const string& id) {
            auto it = nodes_.find(id);
            if (it != nodes_.end()) {
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



        static Graph& getInstance() {
            static Graph gg{};
            return gg;
        }

    private:
        Graph() {}

    private:
        unordered_map<string, Node> nodes_;
        unordered_map<string, Edge> edges_;
        K::UuidFactory uuid_factory_;
    };
}
