#pragma once

#include <list>
#include <memory>
#include <ostream>

#include "events.hpp"
#include "graph.hpp"
#include "utils.hpp"

using namespace std;
namespace K {
    class Chronology {
    private:
        Chronology() {}
        Chronology(const Chronology&) = delete;
        Chronology& operator=(const Chronology&) = delete;

    public:
        static Chronology& get_instance();

        void add_event(shared_ptr<K::Event> e);

        shared_ptr<K::Event> pop_back_event();
        void push_back_event(shared_ptr<K::Event> e);

        void redo();
        void undo();

        const K::Graph& get_graph() const { return gg_; }
        const std::list<std::shared_ptr<K::Event>>& get_events() const {
            return events_;
        }
        std::list<std::shared_ptr<K::Event>>::const_iterator get_pos() const {
            return pos_;
        }

    private:
        K::Graph gg_;
        std::list<std::shared_ptr<K::Event>> events_;
        std::list<std::shared_ptr<K::Event>>::iterator pos_ = events_.end();

    public:
        friend std::ostream& operator<<(std::ostream& os,
                                        const Chronology& obj) {
            os << "Chronology, (" << obj.events_.size() << ") pos_: end - "
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