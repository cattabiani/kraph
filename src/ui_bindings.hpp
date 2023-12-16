#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "graph.hpp"

class [[cheerp::jsexport]] [[cheerp::genericjs]] JsNode {
public:
    [[cheerp::jsexport]] JsNode() = default;
    JsNode(const K::Node& n)
        : id_(new client::String(n.id_.c_str())),
          label_(new client::String(n.label_.c_str())),
          info_(new client::String(n.info_.c_str())), x_(n.x_), y_(n.y_) {}

    [[cheerp::jsexport]] client::String* getId() { return id_; }
    [[cheerp::jsexport]] client::String* getLabel() { return label_; }
    [[cheerp::jsexport]] client::String* getInfo() { return info_; }
    [[cheerp::jsexport]] int getX() { return x_; }
    [[cheerp::jsexport]] int getY() { return y_; }
    [[cheerp::jsexport]] void log() {
        client::console.log(client::String().concat(
            "Node\nid: ", *id_, "\nlabel: ", *label_, "\ninfo: ", *info_,
            "\nx: ", x_, "\ny: ", y_));
    }

    client::String* id_;
    client::String* label_;
    client::String* info_;
    int x_;
    int y_;
};

[[cheerp::jsexport]] [[cheerp::genericjs]] JsNode* graphNewNode(const int x,
                                                                const int y) {
    auto& gg = K::Graph::getInstance();
    const auto& ans = gg.newNode("New Node", "", x, y);

    return new JsNode(ans);
}

[[cheerp::jsexport]] [[cheerp::genericjs]] JsNode*
graphUpdateNode(const client::String& id, const client::String& label,
                const client::String& info) {
    auto& gg = K::Graph::getInstance();
    auto n = gg.updateNode(string(id), string(label), string(info));
    if (n) {
        return new JsNode(*n);
    }
    return nullptr;
}

[[cheerp::jsexport]] [[cheerp::genericjs]] JsNode*
graphGetNode(const client::String& id) {
    auto& gg = K::Graph::getInstance();
    auto n = gg.getNode(string(id));
    if (n) {
        return new JsNode(*n);
    }
    return nullptr;
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void
graphMoveNode(const client::String& id, const int x, const int y) {
    auto& gg = K::Graph::getInstance();
    auto ans = gg.moveNode(string(id), x, y);
    if (!ans) {
        client::console.log(
            client::String().concat("node ", id, " not found!"));
    }
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void
graphRemoveNode(const client::String& id) {
    auto& gg = K::Graph::getInstance();
    auto ans = gg.removeNode(string(id));
    if (!ans) {
        client::console.log(
            client::String().concat("node ", id, " not found!"));
    }
}
