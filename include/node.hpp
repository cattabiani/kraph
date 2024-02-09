#pragma once

#include <string>
#include <unordered_set>
#include "utils.hpp"
#include "kjsonparser.hpp"

using namespace std;

namespace K {
    class Node {
    public:
        Node() = default;
        Node(const string& id, const string& label, const string& info,
             const int x, const int y)
            : id_(id), label_(label), info_(info), x_(x), y_(y) {}
        Node(const K::KJsonParser::dict_type& d) :
        id_(get<string>(*d.at("id_")))
        , label_(get<string>(*d.at("label_"))), info_(get<string>(*d.at("info_"))) 
        , x_(get<int>(*d.at("x_")))
        , y_(get<int>(*d.at("y_")))
        {
        }

        string id_ = "";
        string label_ = "New Node";
        string info_ = "";
        int x_ = 0;
        int y_ = 0;
        unordered_set<string> edges_;

        friend std::ostream& operator<<(std::ostream& os, const Node& obj) {
            using ps = std::pair<string, string>;
            using pi = std::pair<string, int>;
            constexpr auto sep = ", ";
            os << '{' 
               << ps{"id_", obj.id_} << sep
               << ps{"label_", obj.label_} << sep
               << ps{"info_", obj.info_} << sep
               << pi{"x_", obj.x_} << sep
               << pi{"y_", obj.y_} 
               << '}';            
            return os;
        }
    };
}