#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include <string>

using namespace std;

class [[cheerp::jsexport]] [[cheerp::genericjs]] JsEvent {
public:
    [[cheerp::jsexport]] JsEvent() = default;
    JsEvent(const string& label, const int x, const int y)
        : label_(new client::String(label.c_str())), x_(x), y_(y) {}

    [[cheerp::jsexport]] client::String* getLabel() { return label_; }
    [[cheerp::jsexport]] int getX() { return x_; }
    [[cheerp::jsexport]] int getY() { return y_; }

    client::String* label_;
    int x_;
    int y_;
};

[[cheerp::genericjs]] void dispatchEvent(const string& eventType) {
    // Create a custom event with the details of the node update

    auto obj = new JsEvent(eventType, 7, 9);
    auto eventInit = new client::CustomEventInit<JsEvent>();
    eventInit->set_detail(obj);

    auto event = new client::CustomEvent<JsEvent>(eventType.c_str(), eventInit);
    client::document.dispatchEvent(event);
}