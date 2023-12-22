#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

using namespace std;

[[cheerp::jsexport]] [[cheerp::genericjs]] void printGraphW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void printChronologyW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void redoW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void undoW();

// [[cheerp::jsexport]] [[cheerp::genericjs]] void newNodeBridge(const int x, const int y);
// [[cheerp::genericjs]] void emitUpdateNodeBridge(const string& id, const string& label, const int x, const int y);
// [[cheerp::jsexport]] [[cheerp::genericjs]] void registerUpdateNodeBridge(client::EventListener* cb);

// [[cheerp::jsexport]] [[cheerp::genericjs]] void eraseNodeBridge(const client::String& id);
// [[cheerp::genericjs]] void emitEraseNodeBridge(const string& id);
// [[cheerp::jsexport]] [[cheerp::genericjs]] void registerEraseNodeBridge(client::EventListener* cb);



// namespace [[cheerp::genericjs]] client
// {
//     void bau();
// }
//     void updateNode(const String& id, const String& label, const int x, const int y);
//     void eraseNode(const String& id);
// }


// class [[cheerp::jsexport]] [[cheerp::genericjs]] CallbackManager {
//     public:
        
//         [[cheerp::jsexport]] [[cheerp::genericjs]] void registerUpdateNode(client::EventListener* cb);
//         [[cheerp::genericjs]] void emitUpdateNode(const string& id, const string& label, const int x, const int y);

//         client::EventListener* updateNodeCb_;
// };

// [[cheerp::genericjs]] CallbackManager* getCallbackManager();

// class [[cheerp::jsexport]] UpdateNodeEvent {
// public:
//     UpdateNodeEvent(const string& id, const string& label, const int x, const int y) : id_(id), label_(label), x_(x), y_(y) {}

//     [[cheerp::jsexport]] [[cheerp::genericjs]] client::String* getId() { return new client::String(id_.c_str()); }
//     [[cheerp::jsexport]] [[cheerp::genericjs]] client::String* getLabel() { return new client::String(label_.c_str()); }
//     [[cheerp::jsexport]] [[cheerp::genericjs]] int getX() { return x_; }
//     [[cheerp::jsexport]] [[cheerp::genericjs]] int getY() { return y_; }
//     [[cheerp::jsexport]] [[cheerp::genericjs]] void emit();

//     string id_;
//     string label_;
//     int x_;
//     int y_;
// };


// [[cheerp::jsexport]] [[cheerp::genericjs]] void
// dispatchNewNodeEvent(const int x, const int y) {
//     auto& cc = K::Controller::getInstance();
//     auto& h = cc.get_history();

//     // place new event in the history
//     h.emplace_back(NewNodeEvent(x, y));

//     // apply event from history and update time
//     auto p = cc.advance();

//     if (!p) {
//         // it did not advance. No event to dispatch
//         client::console.log("advance failed!");
//         return;
//     }
//     // dispatch event to js
//     auto eventInit = new client::CustomEventInit<NewNodeEvent>();
//     eventInit->set_detail(&std::get<NewNodeEvent>(*p));
//     auto event =
//         new client::CustomEvent<NewNodeEvent>("newNodeEvent", eventInit);
//     client::document.dispatchEvent(event);
// }