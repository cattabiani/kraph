#include "wasm2js.hpp"
#include "chronology.hpp"

[[cheerp::jsexport]] [[cheerp::genericjs]] void printGraphW() {
    auto& cc = K::Chronology::get_instance();
    stringstream ss;
    ss << cc.get_graph();
    client::console.log(client::String(ss.str().c_str()));
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void printChronologyW() {
    auto& cc = K::Chronology::get_instance();
    stringstream ss;
    ss << cc;
    client::console.log(client::String(ss.str().c_str()));
}

string newNode(const int x, const int y) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::NewNodeEvent>(x, y);
    cc.add_event(p);
    return p->n_.id_;
}
[[cheerp::jsexport]] [[cheerp::genericjs]] client::String*
newNodeW(const int x, const int y) {
    auto s = newNode(x, y);
    return new client::String(s.c_str());
}

void newEdge(const string& fromId, const string& toId, bool is_triggered) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::NewEdgeEvent>(fromId, toId, is_triggered);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
newEdgeW(const client::String& fromId, const client::String& toId,
         bool is_triggered) {
    newEdge(std::string(fromId), std::string(toId), is_triggered);
}

void eraseNode(const string& id, bool is_triggered) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::NewNodeEvent>(id, is_triggered);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
eraseNodeW(const client::String& id, bool is_triggered) {
    eraseNode(std::string(id), is_triggered);
}

void eraseEdge(const string& id, bool is_triggered) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::NewEdgeEvent>(id, is_triggered);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
eraseEdgeW(const client::String& id, bool is_triggered) {
    eraseEdge(std::string(id), is_triggered);
}

void moveNode(const string& id, const int x, const int y, bool is_triggered) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::MoveNodeEvent>(id, x, y, is_triggered);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
moveNodeW(const client::String& id, const int x, const int y,
          bool is_triggered) {
    moveNode(std::string(id), x, y, is_triggered);
}

void updateDataNode(const string& id, const string& label, const string& info) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::UpdateDataNodeEvent>(id, label, info);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
updateDataNodeW(const client::String& id, const client::String& label,
                const client::String& info) {
    updateDataNode(std::string(id), string(label), string(info));
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void redoW() {
    auto& cc = K::Chronology::get_instance();
    cc.redo();
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void undoW() {
    auto& cc = K::Chronology::get_instance();
    cc.undo();
}