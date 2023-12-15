#pragma once

#include <string>
#include <unordered_set>

using namespace std;

namespace K {
    class Node {
    public:
        Node(const string& id, const string& label, const string& info,
             const int x, const int y)
            : id_(id), label_(label), info_(info), x_(x), y_(y) {}

        string id_;
        string label_;
        string info_;
        int x_;
        int y_;
        unordered_set<string> edges_;
    };
}