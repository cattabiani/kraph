#pragma once

#include <list>
#include <memory>
#include <sstream>
#include <unordered_map>

#include "edge.hpp"
#include "events.hpp"
#include "node.hpp"
#include "utils.hpp"
#include "uuid.hpp"

using namespace std;

namespace K {
    class Graph {
    private:
        Graph() {}
        Graph(const Graph&) = delete;
        Graph& operator=(const Graph&) = delete;

    public:
        static Graph& get_instance();

    public:
        void new_node(K::NewNodeEvent& e);
        void erase_node(K::EraseNodeEvent& e);
        void new_edge(K::NewEdgeEvent& e);
        void erase_edge(K::EraseEdgeEvent& e);
        void move_node(K::MoveNodeEvent& e);
        void flip_edge_plug(K::FlipEdgePlugEvent& e);

        void clear_nodes() { nodes_.clear(); }
        void clear_edges() { edges_.clear(); }
        void reset_events() {
            events_.clear();
            pos_ = events_.end();
        }
        void reset_uuid() { uuid_factory_.reset(); }

        void reset() {
            clear_nodes();
            clear_edges();
            reset_events();
            reset_uuid();
        }

        const K::Node* get_node(const string& id) const;
        const K::Edge* get_edge(const string& id) const;
        unordered_set<string>
        get_connected_edges(const vector<string>& v) const;

        size_t size_nodes() const { return nodes_.size(); }
        size_t size_edges() const { return edges_.size(); }
        const std::list<std::shared_ptr<K::Event>>& events() const {
            return events_;
        }

        void add_event(shared_ptr<K::Event> e);
        void redo();
        void undo();

    private:
        unordered_map<string, Node> nodes_;
        unordered_map<string, Edge> edges_;
        K::UuidFactory uuid_factory_;

        std::list<std::shared_ptr<K::Event>> events_;
        std::list<std::shared_ptr<K::Event>>::iterator pos_ = events_.end();

    public:
        friend std::ostream& operator<<(std::ostream& os, const Graph& obj) {
            os << "Graph\nNodes:\n"
               << obj.nodes_ << "\nEdges:\n"
               << obj.edges_ << '\n'
               << "Chronology, (" << obj.events_.size() << ") pos_: end - "
               << std::distance<
                      std::list<std::shared_ptr<Event>>::const_iterator>(
                      obj.pos_, obj.events_.end())
               << '\n';
            const auto& container = obj.events_;
            for (auto it = container.begin(); it != container.end();
                 /* no increment here */) {
                os << *(*it);
                if (++it != container.end()) {
                    os << '\n';
                }
            }
            return os;
        }
    };
}
