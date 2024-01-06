#pragma once

#include <string>

#include "utils.hpp"

using namespace std;

namespace K {
    class Edge {
    public:
        Edge() = default;
        Edge(const string& id) : id_(id) {}
        Edge(const string& id, const string& label, const string& info,
             const string& from, const string& to, bool is_from_plug,
             bool is_to_plug)
            : id_(id), label_(label), info_(info), from_(from), to_(to),
              is_from_plug_(is_from_plug), is_to_plug_(is_to_plug) {}

        friend std::ostream& operator<<(std::ostream& os, const Edge& obj) {

            os << "Edge, id: " << obj.id_ << ", label: " << obj.label_
               << ", from: " << obj.from_ << ", to: " << obj.to_
               << ", is_from_plug: " << obj.is_from_plug_
               << ", is_to_plug: " << obj.is_to_plug_;
            return os;
        }

        string id_ = "";
        string label_ = "New Edge";
        string info_ = "";
        string from_ = "";
        string to_ = "";
        bool is_from_plug_ = false;
        bool is_to_plug_ = true;
    };
}