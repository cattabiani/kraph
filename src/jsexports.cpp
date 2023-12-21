#include "jsexports.hpp"
#include "chronology.hpp"

[[cheerp::jsexport]] [[cheerp::genericjs]] void printGraph() {

    auto& cc = K::Chronology::get_instance();

    stringstream ss;
    ss << cc.get_graph();
    client::console.log(client::String(ss.str().c_str()));
}

[[cheerp::jsexport]] void newNode(const int x, const int y) {
    auto& cc = K::Chronology::get_instance();
    auto p = make_shared<K::NewNodeEvent>(x, y);
    cc.add_event(p);
}


[[cheerp::jsexport]] [[cheerp::genericjs]] void emitUpdateNodeEvent(UpdateNodeEvent* p) {
    auto eventInit = new client::CustomEventInit<UpdateNodeEvent>();
    eventInit->set_detail(p);
    auto event = new client::CustomEvent<UpdateNodeEvent>("updateNodeEvent", eventInit);
    client::document.dispatchEvent(event);

}