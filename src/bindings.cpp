#include "bindings.hpp"
#include "graph.hpp"

string newNode(const int x, const int y) {
    auto& cc = K::Graph::get_instance();
    auto p = make_shared<K::NewNodeEvent>(x, y, false);
    cc.add_event(p);
    return p->n_.id_;
}
[[cheerp::jsexport]] [[cheerp::genericjs]] client::String*
newNodeW(const int x, const int y) {
    auto s = newNode(x, y);
    return K::str2Str(s);
}

[[cheerp::genericjs]] client::String* K::str2Str(const string& s) {
    return new client::String(s.c_str());
}

[[cheerp::genericjs]] void K::updateNodeJ(const string& id, const string& label,
                                          const int x, const int y) {
    client::updateNodeJ(K::str2Str(id), K::str2Str(label), x, y);
}
[[cheerp::genericjs]] void K::eraseNodeJ(const string& id) {
    client::eraseNodeJ(K::str2Str(id));
}
[[cheerp::genericjs]] void K::updateEdgeJ(const string& id, const string& label,
                                          const string& fromId,
                                          const string& toId) {
    client::updateEdgeJ(K::str2Str(id), K::str2Str(label), K::str2Str(fromId),
                        K::str2Str(toId));
}
[[cheerp::genericjs]] void K::eraseEdgeJ(const string& id) {
    client::eraseEdgeJ(K::str2Str(id));
}
