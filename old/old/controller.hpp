#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include <string>
#include <variant>
#include <vector>

#include "event.hpp"
#include "graph.hpp"

using namespace std;

namespace K {

    class Controller {
    public:
        using VarType = std::variant<NewNodeEvent>;
        Controller(const Controller&) = delete;
        Controller& operator=(const Controller&) = delete;

        static Controller& getInstance() {
            static Controller cc{};
            return cc;
        }

        vector<VarType>& get_history() { return h_; }

        VarType* advance() {
            if (idx_ >= h_.size()) {
                return nullptr;
            }
            std::visit([this](auto&& arg) { arg.apply(gg_); }, h_[idx_++]);

            return &h_[idx_ - 1];
        }

    private:
        Controller() {}

    private:
        Graph gg_;
        vector<VarType> h_;
        size_t idx_ = 0;
    };
}
