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

    void MoveNodeEvent::_redo(K::Graph& gg) {
        auto n = gg.move_node(id_, x_, y_);
        _updateNodeJ(n);
    }

    void MoveNodeEvent::_undo(K::Graph& gg) {
        _redo(gg);
    }


    void UpdateDataNodeEvent::_redo(K::Graph& gg) {
        auto n = gg.update_data_node(id_, label_, info_);
        _updateNodeJ(n);
    }

    void UpdateDataNodeEvent::_undo(K::Graph& gg) {
        _redo(gg);
    }
}