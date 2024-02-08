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
[[cheerp::jsexport]] [[cheerp::genericjs]] void
moveNodeW(const client::String& id, const int x, const int y,
          bool is_triggered);
[[cheerp::jsexport]] [[cheerp::genericjs]] client::Array*
getConnectedEdgesW(client::Array& a);
[[cheerp::jsexport]] [[cheerp::genericjs]] void
flipEdgePlugW(const client::String& id, const bool is_from, bool is_triggered);
[[cheerp::jsexport]] [[cheerp::genericjs]] void
fillModalWithNodeW(const client::String& id);
[[cheerp::jsexport]] [[cheerp::genericjs]] void
fillModalWithEdgeW(const client::String& id);
[[cheerp::jsexport]] [[cheerp::genericjs]] void
updateNodeDataW(const client::String& id, const client::String& label,
                const client::String& info, bool is_triggered);
[[cheerp::jsexport]] [[cheerp::genericjs]] void
updateEdgeDataW(const client::String& id, const client::String& label,
                const client::String& info, bool is_triggered);
[[cheerp::jsexport]] [[cheerp::genericjs]] client::String* getGraphJsonW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void redoW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void undoW();
[[cheerp::jsexport]] [[cheerp::genericjs]] void loadW(const client::String& s);

namespace [[cheerp::genericjs]] client {
    void updateNodeJ(const String& id, const String& label, const int x,
                     const int y);
    void eraseNodeJ(const String& id);
    void updateEdgeJ(const String& id, const String& label,
                     const String& fromId, const String& toId,
                     bool is_from_plug, bool is_to_plug);
    void eraseEdgeJ(const String& id);
    void fillModalAndOpenJ(const String& id, const String& label,
                           const String& info, bool is_node);
    void resetJ();
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
    void fillModalAndOpenJ(const string& id, const string& label,
                           const string& info, bool is_node);
    void resetJ();

}
