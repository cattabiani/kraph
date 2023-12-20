
#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include <string>
#include <variant>
#include <vector>

#include "controller.hpp"

using namespace std;

[[cheerp::jsexport]] [[cheerp::genericjs]] void
dispatchNewNodeEvent(const int x, const int y) {
    auto& cc = K::Controller::getInstance();
    auto& h = cc.get_history();

    // place new event in the history
    h.emplace_back(NewNodeEvent(x, y));

    // apply event from history and update time
    auto p = cc.advance();

    if (!p) {
        // it did not advance. No event to dispatch
        client::console.log("advance failed!");
        return;
    }
    // dispatch event to js
    auto eventInit = new client::CustomEventInit<NewNodeEvent>();
    eventInit->set_detail(&std::get<NewNodeEvent>(*p));
    auto event =
        new client::CustomEvent<NewNodeEvent>("newNodeEvent", eventInit);
    client::document.dispatchEvent(event);
}