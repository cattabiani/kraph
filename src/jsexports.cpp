#include "jsexports.hpp"
#include "chronology.hpp"

[[cheerp::genericjs]] static client::Array* updateNodeCallbacks = new client::Array();
// // [[cheerp::genericjs]] static CallbackManager* callbackManager = new CallbackManager();
// // [[cheerp::jsexport]] [[cheerp::genericjs]] CallbackManager* getCallbackManager() {
// //     return callbackManager;
// // }





[[cheerp::jsexport]] [[cheerp::genericjs]] void registerUpdateNode(client::EventListener* cb) {
    updateNodeCallbacks->push(cb);
}

[[cheerp::genericjs]] void emitUpdateNode(const string& id, const string& label, const int x, const int y) {

    typedef void (*EventHandler)(client::String* id, client::String* label, int x, int y);
    auto m = updateNodeCallbacks->get_length();

    for (size_t i = 0; i < m; ++i) {
        auto cb = (*updateNodeCallbacks)[i];
        EventHandler h = (EventHandler)cb;
        h(new client::String(id.c_str()), new client::String(label.c_str()), x, y);        
    }
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




// [[cheerp::jsexport]] [[cheerp::genericjs]] void UpdateNodeEvent::emit() {
//     auto eventInit = new client::CustomEventInit<UpdateNodeEvent>();
//     eventInit->set_detail(this);
//     auto event = new client::CustomEvent<UpdateNodeEvent>("updateNodeEvent", eventInit);
//     client::document.dispatchEvent(event);

// }