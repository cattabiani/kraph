#pragma once

#include <string>

using namespace std;

namespace K {
    class Edge {
    public:
        Edge(const string& id, const string& label, const string& info,
             const string& from, const string& to)
            : id_(id), label_(label), info_(info), from_(from), to_(to) {}

        string id_;
        string label_;
        string info_;
        string from_;
        string to_;
    };
}