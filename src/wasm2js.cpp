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

void newNode(const int x, const int y) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::NewNodeEvent>(x, y);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void newNodeW(const int x,
                                                         const int y) {
    newNode(x, y);
}

void newEdge(const string& fromId, const string& toId) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::NewEdgeEvent>(fromId, toId);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
newEdgeW(const client::String& fromId, const client::String& toId) {
    newEdge(std::string(fromId), std::string(toId));
}

void eraseNode(const string& id) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::NewNodeEvent>(id);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
eraseNodeW(const client::String& id) {
    eraseNode(std::string(id));
}

void moveNode(const string& id, const int x, const int y) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::MoveNodeEvent>(id, x, y);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
moveNodeW(const client::String& id, const int x, const int y) {
    moveNode(std::string(id), x, y);
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
