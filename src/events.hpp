#pragma once

#include "graph.hpp"
#include "utils.hpp"

#ifndef TESTS
#include <cheerp/client.h>
#include <cheerp/clientlib.h>
namespace [[cheerp::genericjs]] client {
    void updateNodeJ(const String& id, const String& label, const int x,
                     const int y);
    void eraseNodeJ(const String& id);
    void updateEdgeJ(const String& id, const String& label, const String& from,
                     const String& to, bool isFromPlug, bool isToPlug);
    void eraseEdgeJ(const String& id);
}
#endif

using namespace std;

namespace K {

    class Event {
    public:
        Event(bool is_reverse = false, bool is_triggered = false)
            : is_reverse_(is_reverse), is_triggered_(is_triggered) {}

        void redo(K::Graph& gg) {
            if (is_reverse_)
                _undo(gg);
            else
                _redo(gg);
        };
        void undo(K::Graph& gg) {
            if (is_reverse_)
                _redo(gg);
            else
                _undo(gg);
        };

        bool is_reverse_;
        bool is_triggered_;

        virtual string name() const { return "Event"; }
        friend std::ostream& operator<<(std::ostream& os, const Event& obj) {
            return os << obj.name() << ": "
                      << " t: " << obj.is_triggered_
                      << " r: " << obj.is_reverse_;
        }

    private:
        virtual void _redo(K::Graph& gg) = 0;
        virtual void _undo(K::Graph& gg) = 0;
    };

    class NewNodeEvent : public Event {
    public:
        NewNodeEvent(const int x, const int y) {
            n_.x_ = x;
            n_.y_ = y;
        }
        NewNodeEvent(const string id, bool is_triggered)
            : Event(true, is_triggered) {
            n_.id_ = id;
        }

        K::Node n_;

        virtual string name() const override { return "NewNodeEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const NewNodeEvent& obj) {
            const Event& base = obj;
            return os << base;
        }

    private:
        void _redo(K::Graph& gg) override;
        void _undo(K::Graph& gg) override;
#ifndef TESTS
        [[cheerp::genericjs]]
#endif
        void
        _updateNodeJ(bool ok) const {
#ifndef TESTS
            if (!ok) {
                client::console.log("update node failed!");
                return;
            }
            client::updateNodeJ(n_.id_.c_str(), n_.label_.c_str(), n_.x_,
                                n_.y_);
#endif
        }
#ifndef TESTS
        [[cheerp::genericjs]]
#endif
        void
        _eraseNodeJ(bool ok) const {
#ifndef TESTS
            if (!ok) {
                client::console.log("erase node failed!");
                return;
            }
            client::eraseNodeJ(n_.id_.c_str());
#endif
        }
    };

    class NewEdgeEvent : public Event {
    public:
        NewEdgeEvent(const string& from, const string& to, bool is_triggered)
            : Event(false, is_triggered) {
            e_.from_ = from;
            e_.to_ = to;
        }
        NewEdgeEvent(const string& id, bool is_triggered)
            : Event(true, is_triggered) {
            e_.id_ = id;
        }

        K::Edge e_;

        virtual string name() const override { return "NewEdgeEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const NewEdgeEvent& obj) {
            const Event& base = obj;
            return os << base;
        }

    private:
        void _redo(K::Graph& gg) override;
        void _undo(K::Graph& gg) override;
#ifndef TESTS
        [[cheerp::genericjs]]
#endif
        void
        _updateEdgeJ(bool ok) const {
#ifndef TESTS
            if (!ok) {
                client::console.log("update Edge failed!");
                return;
            }
            client::updateEdgeJ(e_.id_.c_str(), e_.label_.c_str(),
                                e_.from_.c_str(), e_.to_.c_str(),
                                e_.is_from_plug_, e_.is_to_plug_);
#endif
        }
#ifndef TESTS
        [[cheerp::genericjs]]
#endif
        void
        _eraseEdgeJ(bool ok) const {
#ifndef TESTS
            if (!ok) {
                client::console.log("erase Edge failed!");
                return;
            }
            client::eraseEdgeJ(e_.id_.c_str());
#endif
        }
    };

    class MoveNodeEvent : public Event {
    public:
        MoveNodeEvent(const string& id, const int x, const int y,
                      bool is_triggered)
            : id_(id), x_(x), y_(y), Event(false, is_triggered) {}

        string id_;
        int x_;
        int y_;

        virtual string name() const override { return "MoveNodeEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const MoveNodeEvent& obj) {
            const Event& base = obj;
            return os << base;
        }

    private:
        void _redo(K::Graph& gg) override;
        void _undo(K::Graph& gg) override;
#ifndef TESTS
        [[cheerp::genericjs]]
#endif
        void
        _updateNodeJ(const K::Node* n) const {
#ifndef TESTS
            if (!n) {
                client::console.log("Move node failed!");
                return;
            }
            client::updateNodeJ(n->id_.c_str(), n->label_.c_str(), n->x_,
                                n->y_);
#endif
        }
    };

    class UpdateDataNodeEvent : public Event {
    public:
        UpdateDataNodeEvent(const string& id, const string& label,
                            const string& info)
            : id_(id), label_(label), info_(info) {}

        string id_;
        string label_;
        string info_;

        virtual string name() const override { return "UpdateDataNodeEvent"; }
        friend std::ostream& operator<<(std::ostream& os,
                                        const UpdateDataNodeEvent& obj) {
            const Event& base = obj;
            return os << base;
        }

    private:
        void _redo(K::Graph& gg) override;
        void _undo(K::Graph& gg) override;
#ifndef TESTS
        [[cheerp::genericjs]]
#endif
        void
        _updateNodeJ(const K::Node* n) const {
#ifndef TESTS
            if (!n) {
                client::console.log("UpdateData node failed!");
                return;
            }
            client::updateNodeJ(n->id_.c_str(), n->label_.c_str(), n->x_,
                                n->y_);
#endif
        }
    };
}