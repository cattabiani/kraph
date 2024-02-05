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
            using ps = std::pair<string, string>;
            using pi = std::pair<string, int>;
            constexpr auto sep = ", ";
            os << '{'
            << ps{"event_type", obj.name()} << sep
            << pi{"is_triggered_", obj.is_triggered_} 
            << '}';
            return os;
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
            : e_(), Event(is_triggered) {
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

    class MoveNodeEvent : public Event {
    public:
        MoveNodeEvent(const string& id, const int x, const int y,
                      const bool is_triggered)
            : id_(id), x_(x), y_(y), Event(is_triggered) {}
        MoveNodeEvent(const MoveNodeEvent& e) = default;
        MoveNodeEvent& operator=(const MoveNodeEvent&) = default;

        string id_;
        int x_;
        int y_;

        virtual void apply(K::Graph& gg) override;

        virtual string name() const override { return "MoveNodeEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const MoveNodeEvent& obj) {
            const Event& base = obj;
            return os << base;
        }
    };

    class FlipEdgePlugEvent : public Event {
    public:
        FlipEdgePlugEvent(const string& id, bool is_from,
                          const bool is_triggered)
            : id_(id), is_from_(is_from), Event(is_triggered) {}
        FlipEdgePlugEvent(const FlipEdgePlugEvent& e) = default;
        FlipEdgePlugEvent& operator=(const FlipEdgePlugEvent&) = default;

        string id_;
        bool is_from_;

        virtual void apply(K::Graph& gg) override;

        virtual string name() const override { return "FlipEdgePlugEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const FlipEdgePlugEvent& obj) {
            const Event& base = obj;
            return os << base;
        }
    };

    class UpdateNodeDataEvent : public Event {
    public:
        UpdateNodeDataEvent(const string& id, const string& label,
                            const string& info, const bool is_triggered)
            : id_(id), label_(label), info_(info), Event(is_triggered) {}
        UpdateNodeDataEvent(const UpdateNodeDataEvent& e) = default;
        UpdateNodeDataEvent& operator=(const UpdateNodeDataEvent&) = default;

        string id_;
        string label_;
        string info_;

        virtual void apply(K::Graph& gg) override;

        virtual string name() const override { return "UpdateNodeDataEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const UpdateNodeDataEvent& obj) {
            const Event& base = obj;
            return os << base;
        }
    };

    class UpdateEdgeDataEvent : public Event {
    public:
        UpdateEdgeDataEvent(const string& id, const string& label,
                            const string& info, const bool is_triggered)
            : id_(id), label_(label), info_(info), Event(is_triggered) {}
        UpdateEdgeDataEvent(const UpdateEdgeDataEvent& e) = default;
        UpdateEdgeDataEvent& operator=(const UpdateEdgeDataEvent&) = default;

        string id_;
        string label_;
        string info_;

        virtual void apply(K::Graph& gg) override;

        virtual string name() const override { return "UpdateEdgeDataEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const UpdateEdgeDataEvent& obj) {
            const Event& base = obj;
            return os << base;
        }
    };
}