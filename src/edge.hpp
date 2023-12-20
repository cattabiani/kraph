#pragma once

#include <string>

#include "util.hpp"

using namespace std;

namespace K {
    class Edge {
    public:
        Edge(const string& id, const string& label, const string& info,
             const string& from, const string& to)
            : id_(id), label_(label), info_(info), from_(from), to_(to) {}

        friend std::ostream& operator<<(std::ostream& os, const Edge& obj) {

            os << "Edge, id: " << obj.id_ << ", label: " << obj.label_
               << ", from: " << obj.from_ << ", to: " << obj.to_;
            return os;
        }

        string id_;
        string label_;
        string info_;
        string from_;
        string to_;
    };
}