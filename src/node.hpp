#pragma once

#include <string>
#include <unordered_set>

#include "util.hpp"

using namespace std;

namespace K {
    class Node {
    public:
        Node() = default;
        Node(const string& id, const string& label, const string& info,
             const int x, const int y)
            : id_(id), label_(label), info_(info), x_(x), y_(y) {}

        string id_;
        string label_;
        string info_;
        int x_;
        int y_;
        unordered_set<string> edges_;

        friend std::ostream& operator<<(std::ostream& os, const Node& obj) {

            os << "Node, id: " << obj.id_ << ", label: " << obj.label_
               << ", x: " << obj.x_ << ", y: " << obj.y_
               << "edges: " << obj.edges_;
            return os;
        }
    };
}