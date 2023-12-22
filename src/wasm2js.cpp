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
[[cheerp::jsexport]] [[cheerp::genericjs]] void newNodeW(const int x, const int y) {
    newNode(x, y);
}

void eraseNode(const string& id) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::NewNodeEvent>(id);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void eraseNodeW(const client::String& id) {
    eraseNode(std::string(id));
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void redoW() {
    auto& cc = K::Chronology::get_instance();
    cc.redo();
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void undoW() {
    auto& cc = K::Chronology::get_instance();
    cc.undo();
}
