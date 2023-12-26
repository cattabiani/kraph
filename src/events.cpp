#include "events.hpp"
#include "graph.hpp"

void K::NewNodeEvent::apply(K::Graph& gg) { gg.new_node(*this); }
void K::EraseNodeEvent::apply(K::Graph& gg) { gg.erase_node(*this); }
void K::NewEdgeEvent::apply(K::Graph& gg) { gg.new_edge(*this); }
void K::EraseEdgeEvent::apply(K::Graph& gg) { gg.erase_edge(*this); }