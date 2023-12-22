#pragma once

#include "utils.hpp"
#include "graph.hpp"

#ifndef TESTS
#include <cheerp/client.h>
#include <cheerp/clientlib.h>
namespace [[cheerp::genericjs]] client
{
    void updateNodeJ(const String& id, const String& label, const int x, const int y);
    void eraseNodeJ(const String& id);
}
#endif

using namespace std;

namespace K {


    class Event {
    public:
        Event(bool is_reverse=false, bool is_triggered = false) : is_reverse_(is_reverse), is_triggered_(is_triggered) {}

        void redo(K::Graph& gg) { if (is_reverse_) _undo(gg); else _redo(gg); };
        void undo(K::Graph& gg) { if (is_reverse_) _redo(gg); else _undo(gg); };

        bool is_reverse_;
        bool is_triggered_;

        virtual ostream& print(std::ostream& os) const { 
            return os << "Event";
        }
        friend std::ostream& operator<<(std::ostream& os, const Event& obj) {
            return obj.print(os);
        }

        private:
            virtual void _redo(K::Graph& gg) = 0;
            virtual void _undo(K::Graph& gg) = 0;
    };

    class NewNodeEvent : public Event {
    public:
        NewNodeEvent(const int x, const int y) { n_.x_ = x; n_.y_ = y; }
        NewNodeEvent(const string id) : Event(true) { n_.id_ = id; }

        K::Node n_;

        virtual ostream& print(std::ostream& os) const override { 
            return os << "NewNodeEvent, " << n_ << " is_reverse_: " << is_reverse_ << " is_triggered_: " << is_triggered_;
        }
        friend std::ostream& operator<<(std::ostream& os, const NewNodeEvent& obj) {
            return obj.print(os);
        }

        private:
            void _redo(K::Graph& gg) override;
            void _undo(K::Graph& gg) override;
            #ifndef TESTS
            [[cheerp::genericjs]] 
            #endif
            void _updateNodeJ(bool ok) const {
                #ifndef TESTS
                if (!ok) { client::console.log("update node failed!"); }
                client::updateNodeJ(n_.id_.c_str(), n_.label_.c_str(), n_.x_, n_.y_);
                #endif
            }
            #ifndef TESTS
            [[cheerp::genericjs]] 
            #endif
            void _eraseNodeJ(bool ok) const {
                #ifndef TESTS
                if (!ok) { client::console.log("erase node failed!"); }
                client::eraseNodeJ(n_.id_.c_str());
                #endif
            }
    };

}