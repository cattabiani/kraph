#include "events.hpp"
#include "graph.hpp"

#include <iostream>

using namespace std;

namespace K {
    void NewNodeEvent::_redo(K::Graph& gg) {
        auto ok = gg.new_node(n_);
        _updateNodeJ(ok);
    }

    void NewNodeEvent::_undo(K::Graph& gg) {
        auto ok = gg.erase_node(n_);
        _eraseNodeJ(ok);
    }
}