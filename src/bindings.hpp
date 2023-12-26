#pragma once

#include <cheerp/client.h>
#include <cheerp/clientlib.h>

using namespace std;

[[cheerp::jsexport]] [[cheerp::genericjs]] client::String*
newNodeW(const int x, const int y);

namespace [[cheerp::genericjs]] client {
    void updateNodeJ(const String& id, const String& label, const int x,
                     const int y);
    void eraseNodeJ(const String& id);
    void updateEdgeJ(const String& id, const String& label,
                     const String& fromId, const String& toId);
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
                     const string& fromId, const string& toId);
    void eraseEdgeJ(const string& id);

}
