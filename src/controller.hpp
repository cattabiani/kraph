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
    NewNodeEvent(const string& c, const int x, const int y)
        : c_(c), x_(x), y_(y) {}

    [[cheerp::genericjs]] [[cheerp::jsexport]] int getX() { return x_; }
    [[cheerp::genericjs]] [[cheerp::jsexport]] client::String* getC() {
        return new client::String(c_.c_str());
    }

    string c_;
    int x_;
    int y_;
};

[[cheerp::jsexport]] [[cheerp::genericjs]] void
dispatchNewNodeEvent(const int x, const int y) {
    auto p = new NewNodeEvent("AAA", x, y);
    auto eventInit = new client::CustomEventInit<NewNodeEvent>();

    // eventInit->set_detail(p);

    auto event =
        new client::CustomEvent<NewNodeEvent>("newNodeEvent", eventInit);
    client::document.dispatchEvent(event);
}

// class [[cheerp::jsexport]] NewNodeEvent {
// public:
//     [[cheerp::jsexport]] NewNodeEvent(const int x, const int y)
//         : x_(x), y_(y) {}

//     void apply(K::Graph& gg) {
//         auto node = gg.newNode("New Node", "", x_, y_);
//         // id_ = node.id_;
//     }
//     [[cheerp::genericjs]] int getX() { return x_; }

//     // void undo(K::Graph& gg) { gg.removeNode(id_); }

//     // constexpr static const char* eventType_ = "newNodeEvent";
//     int x_;
//     int y_;
//     // string id_;
// };

// namespace K {

//     class Controller {
//         using VarType = std::variant<NewNodeEvent>;

//     public:
//         Controller(const Controller&) = delete;
//         Controller& operator=(const Controller&) = delete;

//         static Controller& getInstance() {
//             static Controller cc{};
//             return cc;
//         }

//         vector<VarType>& get_history() { return h_; }

//         VarType* advance() {
//             if (idx_ >= h_.size()) {
//                 return nullptr;
//             }
//             std::visit([this](auto&& arg) { arg.apply(gg_); }, h_[idx_++]);

//             return &h_[idx_ - 1];
//         }

//     private:
//         Controller() {}

//     private:
//         Graph gg_;
//         vector<VarType> h_;
//         size_t idx_ = 0;
//     };
// }

// [[cheerp::jsexport]] [[cheerp::genericjs]] void
// dispatchNewNodeEvent(const int x, const int y) {
//     auto& cc = K::Controller::getInstance();
//     auto& h = cc.get_history();
//     h.emplace_back(NewNodeEvent(x, y));

//     auto p = cc.advance();
//     if (!p) {
//         client::console.log("advance failed!");
//         return;
//     }
//     client::console.log(client::String().concat("advance success! ",
//     h.size())); auto eventInit = new client::CustomEventInit<NewNodeEvent>();

//     eventInit->set_detail(&std::get<NewNodeEvent>(*p));

//     auto event =
//         new client::CustomEvent<NewNodeEvent>("newNodeEvent", eventInit);
//     client::document.dispatchEvent(event);
// }

// class [[cheerp::jsexport]] Bau {
//     public:
//     [[cheerp::jsexport]] Bau(const int x, const int y) : x_(x), y_(y),
//     z_("AAA") {} int x_; int y_; std::string z_;
// };

// [[cheerp::jsexport]] [[cheerp::genericjs]]
// void dispatchNewNodeEvent(int x, int y) {
//     auto a = new Bau(x, y);
//     auto eventInit = new client::CustomEventInit<Bau>();
//     eventInit->set_detail(a);

//     auto event =
//         new client::CustomEvent<Bau>("newNodeEvent", eventInit);
//     client::document.dispatchEvent(event);
// }

// class [[cheerp::jsexport]] NewNodeEvent {
// public:
//     [[cheerp::jsexport]] NewNodeEvent(const int x, const int y)
//         : x_(x), y_(y) {}

//     void apply(K::Graph& gg) { gg.newNode("New Node", "", x_, y_); }

//     int x_;
//     int y_;
// };

// namespace K {

//     // class [[cheerp::jsexport]] [[cheerp::genericjs]] NewNodeEvent {
//     // public:
//     //     NewNodeEvent() = default;
//     //     [[cheerp::jsexport]] [[cheerp::genericjs]] void apply() {
//     //         client::console.log("apply");
//     //         auto& gg = K::Graph::getInstance();

//     //         // auto eventInit = new
//     client::CustomEventInit<NewNodeEvent>();
//     //         // eventInit->set_detail(this);

//     //         auto event = new client::Event("bauEvent");
//     //         client::document.dispatchEvent(event);
//     //     }
//     //     [[cheerp::jsexport]] [[cheerp::genericjs]] void undo() {
//     //         client::console.log("undo");
//     //     }
//     //     [[cheerp::jsexport]] [[cheerp::genericjs]] static void
//     staticApply()
//     //     {
//     //         client::console.log("staticApply");
//     //     }
//     // };

//     using VarType = std::variant<NewNodeEvent>;

//     class Controller {
//     public:
//         Controller(const Controller&) = delete;
//         Controller& operator=(const Controller&) = delete;

//         static Controller& getInstance() {
//             static Controller cc{};
//             return cc;
//         }

//         vector<VarType>& get_history() { return h_; }

//         void advance(const size_t n = 1) {
//             size_t end0 = idx_ + n;
//             for (; idx_ < h_.size() && idx_ < end0; ++idx_) {
//                 std::visit([this](auto&& arg) { arg.apply(gg_); }, h_[idx_]);
//             }

//             auto a = new NewNodeEvent(3, 4);
//         }

//     private:
//         Controller() {}

//     private:
//         Graph gg_;
//         vector<VarType> h_;
//         size_t idx_;
//     };
// }

// [[cheerp::genericjs]] void
// bau(NewNodeEvent* e) {

//     auto eventInit = new client::CustomEventInit<NewNodeEvent>();
//     eventInit->set_detail(e);

//     auto event =
//         new client::CustomEvent<NewNodeEvent>("newNodeEvent", eventInit);
//     client::document.dispatchEvent(event);
// }
