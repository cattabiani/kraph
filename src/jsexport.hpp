#pragma once

#include <sstream>

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

#include "graph.hpp"

using namespace std;

[[cheerp::jsexport]] [[cheerp::genericjs]] void printGraph() {

    auto& gg = K::Graph::getInstance();

    stringstream ss;
    ss << gg;
    client::console.log(client::String(ss.str().c_str()));
}