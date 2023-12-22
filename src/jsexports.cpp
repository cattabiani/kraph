#include "jsexports.hpp"
#include "chronology.hpp"

[[cheerp::genericjs]] static client::EventListener* updateNodeCb = nullptr;
[[cheerp::jsexport]] [[cheerp::genericjs]] void registerUpdateNode(client::EventListener* cb) {
    updateNodeCb = cb;
}

[[cheerp::genericjs]] void emitUpdateNode(const string& id, const string& label, const int x, const int y) {
    typedef void (*EventHandler)(client::String* id, client::String* label, int x, int y);
    EventHandler eh = (EventHandler)updateNodeCb;
    eh(new client::String(id.c_str()), new client::String(label.c_str()), x, y);
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void printGraph() {

    auto& cc = K::Chronology::get_instance();

    stringstream ss;
    ss << cc.get_graph();
    client::console.log(client::String(ss.str().c_str()));
}


void _newNode(const int x, const int y) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::NewNodeEvent>(x, y);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void newNode(const int x, const int y) {
    _newNode(x, y);
}
