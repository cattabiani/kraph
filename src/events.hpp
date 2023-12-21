#pragma once

#include "utils.hpp"



using namespace std;

namespace K {

    class Graph;

    class Event {
    public:

        virtual void redo(K::Graph& gg) = 0;
        virtual void undo(K::Graph& gg) = 0;
        virtual ostream& print(std::ostream& os) const { 
            return os << "Event";
        }
        friend std::ostream& operator<<(std::ostream& os, const Event& obj) {
            return obj.print(os);
        }
    };

    class NewNodeEvent : public Event {
    public:
        NewNodeEvent(const int x, const int y) : x_(x), y_(y) {}
        void redo(K::Graph& gg) override;
        void undo(K::Graph& gg) override;

        string id_;
        int x_;
        int y_;

        virtual ostream& print(std::ostream& os) const override { 
            return os << "NewNodeEvent, x_: " << x_ << " y_: " << y_;
        }
        friend std::ostream& operator<<(std::ostream& os, const NewNodeEvent& obj) {
            return obj.print(os);
        }
    };
}