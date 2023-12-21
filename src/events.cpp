#include "events.hpp"
#include "graph.hpp"

// #ifdef TESTS
#include "jsexports.hpp"
// #endif

#include <iostream>

using namespace std;

namespace K {
    void NewNodeEvent::redo(K::Graph& gg) {
        auto n = gg.new_node(x_, y_);
        if (n) {
            id_ = n->id_;
            auto p = new UpdateNodeEvent(id_, n->label_, x_, y_);
            emitUpdateNodeEvent(p);
        }
    }

    void NewNodeEvent::undo(K::Graph& gg) {
        auto n = gg.erase_node(id_);
        if (n) {
            // todo
        }
    }
}