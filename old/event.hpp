#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include <string>

#include "graph.hpp"

class [[cheerp::jsexport]] NewNodeEvent {
    // cpp side
public:
    NewNodeEvent(const int x, const int y) : x_(x), y_(y) {}

    void apply(K::Graph& gg) {
        auto node = gg.newNode("New Node", "", x_, y_);
        id_ = node.id_;
    }
    void undo(K::Graph& gg) { gg.removeNode(id_); }

    // vars

    string id_;
    int x_;
    int y_;

    // js side
public:
    [[cheerp::genericjs]] [[cheerp::jsexport]] client::String* getId() {
        return new client::String(id_.c_str());
    }
    [[cheerp::genericjs]] [[cheerp::jsexport]] int getX() { return x_; }
    [[cheerp::genericjs]] [[cheerp::jsexport]] int getY() { return y_; }
};

class [[cheerp::jsexport]] RemoveNodeEvent {
    // cpp side
public:
    RemoveNodeEvent(const int x, const int y) : x_(x), y_(y) {}

    void apply(K::Graph& gg) {
        auto node = gg.newNode("New Node", "", x_, y_);
        id_ = node.id_;
    }
    void undo(K::Graph& gg) {
        auto nh = gg.removeNode(id_);
        if (!nh.empty()) {
            x_ = nh.mapped().x_;
            y_ = nh.mapped().y_;
        }
    }

    // vars

    string id_;
    int x_;
    int y_;

    // js side
public:
    [[cheerp::genericjs]] [[cheerp::jsexport]] client::String* getId() {
        return new client::String(id_.c_str());
    }
    [[cheerp::genericjs]] [[cheerp::jsexport]] int getX() { return x_; }
    [[cheerp::genericjs]] [[cheerp::jsexport]] int getY() { return y_; }
};