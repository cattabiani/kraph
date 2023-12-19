#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include <string>
#include <variant>
#include <vector>

#include "graph.hpp"

using namespace std;

class [[cheerp::jsexport]] NewNodeEvent {
public:
    [[cheerp::jsexport]] NewNodeEvent(const int x, const int y)
        : x_(x), y_(y) {}

    void apply(K::Graph& gg) { gg.newNode("New Node", "", x_, y_); }

    int x_;
    int y_;
};

namespace K {

    // class [[cheerp::jsexport]] [[cheerp::genericjs]] NewNodeEvent {
    // public:
    //     NewNodeEvent() = default;
    //     [[cheerp::jsexport]] [[cheerp::genericjs]] void apply() {
    //         client::console.log("apply");
    //         auto& gg = K::Graph::getInstance();

    //         // auto eventInit = new client::CustomEventInit<NewNodeEvent>();
    //         // eventInit->set_detail(this);

    //         auto event = new client::Event("bauEvent");
    //         client::document.dispatchEvent(event);
    //     }
    //     [[cheerp::jsexport]] [[cheerp::genericjs]] void undo() {
    //         client::console.log("undo");
    //     }
    //     [[cheerp::jsexport]] [[cheerp::genericjs]] static void staticApply()
    //     {
    //         client::console.log("staticApply");
    //     }
    // };

    using VarType = std::variant<NewNodeEvent>;

    class Controller {
    public:
        Controller(const Controller&) = delete;
        Controller& operator=(const Controller&) = delete;

        static Controller& getInstance() {
            static Controller cc{};
            return cc;
        }

        vector<VarType>& get_history() { return h_; }

        void advance(const size_t n = 1) {
            size_t end0 = idx_ + n;
            for (; idx_ < h_.size() && idx_ < end0; ++idx_) {
                std::visit([this](auto&& arg) { arg.apply(gg_); }, h_[idx_]);
            }
        }

    private:
        Controller() {}

    private:
        Graph gg_;
        vector<VarType> h_;
        size_t idx_;
    };
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void
dispatchNewNodeEvent(const int x, const int y) {
    auto& cc = K::Controller::getInstance();
    auto& h = cc.get_history();
    h.emplace_back(NewNodeEvent(x, y));
    cc.advance();

    auto eventInit = new client::CustomEventInit<NewNodeEvent>();
    eventInit->set_detail(&std::get<NewNodeEvent>(h.back()));

    auto event =
        new client::CustomEvent<NewNodeEvent>("newNodeEvent", eventInit);
    client::document.dispatchEvent(event);
}