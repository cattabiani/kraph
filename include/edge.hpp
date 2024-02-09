#pragma once

#include <string>
#include "utils.hpp"
#include "kjsonparser.hpp"

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
        Edge(const K::KJsonParser::dict_type& d) : id_(get<string>(*d.at("id_")))
        , label_(get<string>(*d.at("label_"))), info_(get<string>(*d.at("info_"))) 
        , from_(get<string>(*d.at("from_")))
        , to_(get<string>(*d.at("to_")))
        , is_from_plug_(get<int>(*d.at("is_from_plug_")))
        , is_to_plug_(get<int>(*d.at("is_to_plug_")))
         {
        }

        friend std::ostream& operator<<(std::ostream& os, const Edge& obj) {
            using ps = std::pair<string, string>;
            using pi = std::pair<string, int>;
            constexpr auto sep = ", ";
            os << '{'
            << ps{"id_", obj.id_} << sep
            << ps{"label_", obj.label_} << sep
            << ps{"info_", obj.info_} << sep
            << ps{"from_", obj.from_} << sep
            << ps{"to_", obj.to_} << sep
            << pi{"is_from_plug_", obj.is_from_plug_} << sep
            << pi{"is_to_plug_", obj.is_to_plug_}
            << '}';
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