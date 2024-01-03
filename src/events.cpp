#include "events.hpp"
#include "graph.hpp"

void K::NewNodeEvent::apply(K::Graph& gg) { gg.new_node(*this); }
void K::EraseNodeEvent::apply(K::Graph& gg) { gg.erase_node(*this); }
void K::NewEdgeEvent::apply(K::Graph& gg) { gg.new_edge(*this); }
void K::EraseEdgeEvent::apply(K::Graph& gg) { gg.erase_edge(*this); }
void K::MoveNodeEvent::apply(K::Graph& gg) { gg.move_node(*this); }
void K::FlipEdgePlugEvent::apply(K::Graph& gg) { gg.flip_edge_plug(*this); }
void K::UpdateNodeDataEvent::apply(K::Graph& gg) { gg.update_node_data(*this); }
void K::UpdateEdgeDataEvent::apply(K::Graph& gg) { gg.update_edge_data(*this); }