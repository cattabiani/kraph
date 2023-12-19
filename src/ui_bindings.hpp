#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include <unordered_set>

#include "graph.hpp"

class [[cheerp::jsexport]] [[cheerp::genericjs]] JsNode {
public:
    [[cheerp::jsexport]] JsNode() = default;
    JsNode(const K::Node& n)
        : id_(new client::String(n.id_.c_str())),
          label_(new client::String(n.label_.c_str())),
          info_(new client::String(n.info_.c_str())), x_(n.x_), y_(n.y_),
          edges_(new client::Array()) {
        for (const auto& i : n.edges_) {
            edges_->push(new client::String(i.c_str()));
        }
    }

    [[cheerp::jsexport]] client::String* getId() { return id_; }
    [[cheerp::jsexport]] client::String* getLabel() { return label_; }
    [[cheerp::jsexport]] client::String* getInfo() { return info_; }
    [[cheerp::jsexport]] int getX() { return x_; }
    [[cheerp::jsexport]] int getY() { return y_; }
    [[cheerp::jsexport]] client::Array* getEdges() { return edges_; }
    [[cheerp::jsexport]] void log() {
        string s;
        s += "Node\nid: " + string(*id_) + "\nlabel: " + string(*label_) +
             "\ninfo: " + string(*info_) + "\nx: " + to_string(x_) +
             "\ny: " + to_string(y_) + "\nedges (" +
             to_string(edges_->get_length()) + "): ";

        for (size_t i = 0; i < edges_->get_length(); ++i) {
            auto id = static_cast<client::String*>(edges_->operator[](i));
            s += string(*id) + ", ";
        }

        client::console.log(client::String(s.c_str()));
    }

    client::String* id_;
    client::String* label_;
    client::String* info_;
    int x_;
    int y_;
    client::Array* edges_;
};

class [[cheerp::jsexport]] [[cheerp::genericjs]] JsEdge {
public:
    [[cheerp::jsexport]] JsEdge() = default;
    JsEdge(const K::Edge& e)
        : id_(new client::String(e.id_.c_str())),
          label_(new client::String(e.label_.c_str())),
          info_(new client::String(e.info_.c_str())),
          from_(new client::String(e.from_.c_str())),
          to_(new client::String(e.to_.c_str())) {}

    [[cheerp::jsexport]] client::String* getId() { return id_; }
    [[cheerp::jsexport]] client::String* getLabel() { return label_; }
    [[cheerp::jsexport]] client::String* getInfo() { return info_; }
    [[cheerp::jsexport]] client::String* getFrom() { return from_; }
    [[cheerp::jsexport]] client::String* getTo() { return to_; }
    [[cheerp::jsexport]] void log() {
        client::console.log(client::String().concat(
            "Edge\nid: ", *id_, "\nlabel: ", *label_, "\ninfo: ", *info_,
            "\nfrom: ", from_, "\nto: ", to_));
    }

    client::String* id_;
    client::String* label_;
    client::String* info_;
    client::String* from_;
    client::String* to_;
};

[[cheerp::jsexport]] [[cheerp::genericjs]] void graphLog() {
    auto& gg = K::Graph::getInstance();
    client::console.log(client::String().concat("Nodes: ", gg.nodesSize(),
                                                "\nedges: ", gg.edgesSize()));
}

[[cheerp::jsexport]] [[cheerp::genericjs]] JsEdge*
graphNewEdge(const client::String& from, const client::String& to) {
    auto& gg = K::Graph::getInstance();
    const auto ans = gg.newEdge("New Edge", "", string(from), string(to));

    if (ans) {
        return new JsEdge(*ans);
    }
    return nullptr;
}

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

[[cheerp::jsexport]] [[cheerp::genericjs]] JsEdge*
graphGetEdge(const client::String& id) {
    auto& gg = K::Graph::getInstance();
    auto e = gg.getEdge(string(id));
    if (e) {
        return new JsEdge(*e);
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
