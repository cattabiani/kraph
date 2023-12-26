#pragma once

#include "edge.hpp"
#include "node.hpp"
#include "utils.hpp"

namespace K {
    class Graph;

    class Event {
    public:
        Event(bool is_triggered = false) : is_triggered_(is_triggered) {}

        virtual void apply(K::Graph& gg) = 0;

        bool is_triggered_;

        virtual string name() const { return "Event"; }
        friend std::ostream& operator<<(std::ostream& os, const Event& obj) {
            return os << obj.name() << ": "
                      << " t: " << obj.is_triggered_;
        }
    };

    class NewNodeEvent : public Event {
    public:
        NewNodeEvent(const int x, const int y, const bool is_triggered)
            : Event(is_triggered) {
            n_.x_ = x;
            n_.y_ = y;
        }
        NewNodeEvent(const K::Node& n, const bool is_triggered)
            : n_(n), Event(is_triggered) {}

        K::Node n_;

        virtual void apply(K::Graph& gg) override;

        virtual string name() const override { return "NewNodeEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const NewNodeEvent& obj) {
            const Event& base = obj;
            return os << base;
        }
    };

    class EraseNodeEvent : public Event {
    public:
        EraseNodeEvent(const string& id, const bool is_triggered)
            : Event(is_triggered) {
            n_.id_ = id;
        }
        EraseNodeEvent(const K::Node& n, const bool is_triggered)
            : n_(n), Event(is_triggered) {}

        K::Node n_;

        virtual void apply(K::Graph& gg) override;

        virtual string name() const override { return "EraseNodeEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const EraseNodeEvent& obj) {
            const Event& base = obj;
            return os << base;
        }
    };

    class NewEdgeEvent : public Event {
    public:
        NewEdgeEvent(const string& from, const string& to,
                     const bool is_triggered)
            : Event(is_triggered) {
            e_.from_ = from;
            e_.to_ = to;
        }
        NewEdgeEvent(const K::Edge& e, const bool is_triggered)
            : e_(e), Event(is_triggered) {}

        K::Edge e_;

        virtual void apply(K::Graph& gg) override;

        virtual string name() const override { return "NewEdgeEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const NewEdgeEvent& obj) {
            const Event& base = obj;
            return os << base;
        }
    };

    class EraseEdgeEvent : public Event {
    public:
        EraseEdgeEvent(const string& id, const bool is_triggered)
            : Event(is_triggered) {
            e_.id_ = id;
        }
        EraseEdgeEvent(const K::Edge& e, const bool is_triggered)
            : e_(e), Event(is_triggered) {}

        K::Edge e_;

        virtual void apply(K::Graph& gg) override;

        virtual string name() const override { return "EraseEdgeEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const EraseEdgeEvent& obj) {
            const Event& base = obj;
            return os << base;
        }
    };
}