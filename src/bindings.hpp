#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

using namespace std;

[[cheerp::jsexport]] [[cheerp::genericjs]] client::String*
newNodeW(const int x, const int y, bool is_triggered);
[[cheerp::jsexport]] [[cheerp::genericjs]] void
eraseNodeW(const client::String& id, bool is_triggered);
[[cheerp::jsexport]] [[cheerp::genericjs]] void
newEdgeW(const client::String& fromId, const client::String& toId,
         bool is_triggered);
[[cheerp::jsexport]] [[cheerp::genericjs]] void
eraseEdgeW(const client::String& id, bool is_triggered);
// [[cheerp::jsexport]] [[cheerp::genericjs]] void
// moveNodeW(const client::String& id, const int x, const int y,
//           bool is_triggered);
// [[cheerp::jsexport]] [[cheerp::genericjs]] void
// updateDataNodeW(const client::String& id, const client::String& label,
//                 const client::String& info);

[[cheerp::jsexport]] [[cheerp::genericjs]] void printGraphW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void redoW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void undoW();

namespace [[cheerp::genericjs]] client {
    void updateNodeJ(const String& id, const String& label, const int x,
                     const int y);
    void eraseNodeJ(const String& id);
    void updateEdgeJ(const String& id, const String& label,
                     const String& fromId, const String& toId,
                     bool is_from_plug, bool is_to_plug);
    void eraseEdgeJ(const String& id);
}

namespace [[cheerp::genericjs]] K {
    client::String* str2Str(const string& s);

    void updateNodeJ(const string& id, const string& label, const int x,
                     const int y);
    void updateNodeJ(const string& id, const string& label, const int x,
                     const int y);
    void eraseNodeJ(const string& id);
    void updateEdgeJ(const string& id, const string& label,
                     const string& fromId, const string& toId,
                     bool is_from_plug, bool is_to_plug);
    void eraseEdgeJ(const string& id);

}
