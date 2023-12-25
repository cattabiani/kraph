#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

using namespace std;

[[cheerp::jsexport]] [[cheerp::genericjs]] void printGraphW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void printChronologyW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void redoW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void undoW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void
updateDataNodeW(const client::String& id, const client::String& label,
                const client::String& info);
[[cheerp::jsexport]] [[cheerp::genericjs]] client::String*
newNodeW(const int x, const int y);
[[cheerp::jsexport]] [[cheerp::genericjs]] void
newEdgeW(const client::String& fromId, const client::String& toId,
         bool is_triggered);
[[cheerp::jsexport]] [[cheerp::genericjs]] void
moveNodeW(const client::String& id, const int x, const int y,
          bool is_triggered);
