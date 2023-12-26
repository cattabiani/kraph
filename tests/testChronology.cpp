// tests/test_hello.cpp
#include <gtest/gtest.h>

#include "../src/graph.hpp"

#include <iostream>

TEST(chronologyTest, newNode) {
    auto& gg = K::Graph::get_instance();
    gg.reset();
    shared_ptr<K::Event> p = make_shared<K::NewNodeEvent>(0, 0, false);
    gg.add_event(p);
    p = make_shared<K::NewNodeEvent>(1, 1, false);
    gg.add_event(p);
    p = make_shared<K::NewNodeEvent>(2, 2, false);
    gg.add_event(p);
    p = make_shared<K::NewEdgeEvent>("uuid_0", "uuid_1", false);
    gg.add_event(p);
    p = make_shared<K::NewEdgeEvent>("uuid_0", "uuid_2", false);
    gg.add_event(p);
    p = make_shared<K::NewEdgeEvent>("uuid_1", "uuid_2", false);
    gg.add_event(p);
    p = make_shared<K::EraseNodeEvent>("uuid_0", false);
    gg.add_event(p);
    p = make_shared<K::EraseNodeEvent>("uuid_1", false);
    gg.add_event(p);

    cout << gg << "\n-----------\n";

    gg.undo();
    gg.undo();
    gg.undo();
    // gg.redo();
    // gg.redo();
    // gg.redo();
    // gg.undo();
    // gg.undo();
    // gg.undo();
    // gg.redo();
    // gg.redo();
    // gg.redo();
    // gg.redo();

    cout << gg << endl;
}

int main(int argc, char** argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
