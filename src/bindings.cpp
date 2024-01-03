#include "bindings.hpp"
#include "graph.hpp"

string newNode(const int x, const int y, bool is_triggered) {
    auto& cc = K::Graph::get_instance();
    auto p = make_shared<K::NewNodeEvent>(x, y, is_triggered);
    cc.add_event(p);
    return p->n_.id_;
}
[[cheerp::jsexport]] [[cheerp::genericjs]] client::String*
newNodeW(const int x, const int y, bool is_triggered) {
    auto s = newNode(x, y, is_triggered);
    return K::str2Str(s);
}
void eraseNode(const std::string& id, bool is_triggered) {
    auto& cc = K::Graph::get_instance();
    auto p = make_shared<K::EraseNodeEvent>(id, is_triggered);
    cc.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
eraseNodeW(const client::String& id, bool is_triggered) {
    eraseNode(std::string(id), is_triggered);
}
void newEdge(const string& fromId, const string& toId, bool is_triggered) {
    auto& gg = K::Graph::get_instance();
    auto p = make_shared<K::NewEdgeEvent>(fromId, toId, is_triggered);
    gg.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
newEdgeW(const client::String& fromId, const client::String& toId,
         bool is_triggered) {
    newEdge(std::string(fromId), std::string(toId), is_triggered);
}
void eraseEdge(const string& id, bool is_triggered) {
    auto& gg = K::Graph::get_instance();
    auto p = make_shared<K::EraseEdgeEvent>(id, is_triggered);
    gg.add_event(p);
}
[[cheerp::jsexport]] [[cheerp::genericjs]] void
eraseEdgeW(const client::String& id, bool is_triggered) {
    eraseEdge(std::string(id), is_triggered);
}

unordered_set<string> getConnectedEdges(const vector<string>& v) {
    auto& gg = K::Graph::get_instance();
    return gg.get_connected_edges(v);
}

void moveNode(const string& id, const int x, const int y, bool is_triggered) {
    auto& gg = K::Graph::get_instance();
    auto p = make_shared<K::MoveNodeEvent>(id, x, y, is_triggered);
    gg.add_event(p);
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void
moveNodeW(const client::String& id, const int x, const int y,
          bool is_triggered) {
    moveNode(std::string(id), x, y, is_triggered);
}

[[cheerp::jsexport]] [[cheerp::genericjs]] client::Array*
getConnectedEdgesW(client::Array& a) {
    vector<string> v;
    v.reserve(a.get_length());
    for (size_t i = 0; i < a.get_length(); ++i) {
        auto* p = static_cast<client::String*>(a[i]);
        v.push_back(string(*p));
    }

    auto s = getConnectedEdges(v);
    auto ans = new client::Array;
    for (const auto& i : s) {
        ans->push(new client::String(i.c_str()));
    }
    return ans;
}

void flipEdgePlug(const string& id, bool is_from, bool is_triggered) {
    auto& gg = K::Graph::get_instance();
    auto p = make_shared<K::FlipEdgePlugEvent>(id, is_from, is_triggered);
    gg.add_event(p);
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void
flipEdgePlugW(const client::String& id, const bool is_from, bool is_triggered) {
    flipEdgePlug(std::string(id), is_from, is_triggered);
}

void fillModalWithNode(const string& id) {
    auto& gg = K::Graph::get_instance();
    auto n = gg.get_node(id);
    if (n) {
        K::fillModalAndOpenJ(id, n->label_, n->info_, true);
    }
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void
fillModalWithNodeW(const client::String& id) {
    fillModalWithNode(std::string(id));
}

void updateNodeData(const string& id, const string& label, const string& info,
                    bool is_triggered) {
    auto& gg = K::Graph::get_instance();
    auto p = make_shared<K::UpdateNodeDataEvent>(id, label, info, is_triggered);
    gg.add_event(p);
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void
updateNodeDataW(const client::String& id, const client::String& label,
                const client::String& info, bool is_triggered) {
    updateNodeData(std::string(id), std::string(label), std::string(info),
                   is_triggered);
}

void updateEdgeData(const string& id, const string& label, const string& info,
                    bool is_triggered) {
    auto& gg = K::Graph::get_instance();
    auto p = make_shared<K::UpdateEdgeDataEvent>(id, label, info, is_triggered);
    gg.add_event(p);
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void
updateEdgeDataW(const client::String& id, const client::String& label,
                const client::String& info, bool is_triggered) {
    updateEdgeData(std::string(id), std::string(label), std::string(info),
                   is_triggered);
}

void fillModalWithEdge(const string& id) {
    auto& gg = K::Graph::get_instance();
    auto n = gg.get_edge(id);
    if (n) {
        K::fillModalAndOpenJ(id, n->label_, n->info_, false);
    }
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void
fillModalWithEdgeW(const client::String& id) {
    fillModalWithEdge(std::string(id));
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void printGraphW() {
    auto& gg = K::Graph::get_instance();
    stringstream ss;
    ss << gg << endl;
    client::console.log(client::String(ss.str().c_str()));
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void redoW() {
    auto& gg = K::Graph::get_instance();
    gg.redo();
}

[[cheerp::jsexport]] [[cheerp::genericjs]] void undoW() {
    auto& gg = K::Graph::get_instance();
    gg.undo();
}

// void updateDataNode(const string& id, const string& label, const string&
// info) {
//     auto& gg = K::Graph::get_instance();
//     auto p = make_shared<K::UpdateDataNodeEvent>(id, label, info);
//     cc.add_event(p);
// }
// [[cheerp::jsexport]] [[cheerp::genericjs]] void
// updateDataNodeW(const client::String& id, const client::String& label,
//                 const client::String& info) {
//     updateDataNode(std::string(id), string(label), string(info));
// }

[[cheerp::genericjs]] client::String* K::str2Str(const string& s) {
    return new client::String(s.c_str());
}

[[cheerp::genericjs]] void K::updateNodeJ(const string& id, const string& label,
                                          const int x, const int y) {
    client::updateNodeJ(K::str2Str(id), K::str2Str(label), x, y);
}
[[cheerp::genericjs]] void K::eraseNodeJ(const string& id) {
    client::eraseNodeJ(K::str2Str(id));
}
[[cheerp::genericjs]] void K::updateEdgeJ(const string& id, const string& label,
                                          const string& fromId,
                                          const string& toId, bool is_from_plug,
                                          bool is_to_plug) {
    client::updateEdgeJ(K::str2Str(id), K::str2Str(label), K::str2Str(fromId),
                        K::str2Str(toId), is_from_plug, is_to_plug);
}
[[cheerp::genericjs]] void K::eraseEdgeJ(const string& id) {
    client::eraseEdgeJ(K::str2Str(id));
}

[[cheerp::genericjs]] void K::fillModalAndOpenJ(const string& id,
                                                const string& label,
                                                const string& info,
                                                bool is_node) {

    client::fillModalAndOpenJ(K::str2Str(id), K::str2Str(label),
                              K::str2Str(info), is_node);
}
