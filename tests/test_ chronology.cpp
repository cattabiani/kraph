// tests/test_hello.cpp
#include <gtest/gtest.h>

#include "../src/chronology.hpp"
#include "../src/events.hpp"

#include <iostream>

void fill_chronology(size_t b, size_t e) {
    auto& cc = K::Chronology::get_instance();
    for (size_t i = b; i < e; ++i) {
        auto p = make_shared<K::NewNodeEvent>(i, i);
        cc.add_event(p);
    }
}

TEST(chronology_test, general_time_travel) {
    auto& cc = K::Chronology::get_instance();

    fill_chronology(0, 5);

    cc.undo();
    cc.undo();
    cc.undo();

    EXPECT_EQ(distance(cc.get_pos(), cc.get_events().end()), 3); 
    EXPECT_EQ(cc.get_events().size(), 5); 


    cc.undo();
    cc.undo();

    EXPECT_EQ(distance(cc.get_pos(), cc.get_events().end()), 5); 
    EXPECT_EQ(cc.get_events().size(), 5); 

    cc.undo();
    cc.undo();

    EXPECT_EQ(distance(cc.get_pos(), cc.get_events().end()), 5); 
    EXPECT_EQ(cc.get_events().size(), 5); 

    cc.redo();
    cc.redo();
    cc.redo();
    cc.redo();
    cc.redo();

    EXPECT_EQ(distance(cc.get_pos(), cc.get_events().end()), 0); 
    EXPECT_EQ(cc.get_events().size(), 5); 

    cc.redo();

    EXPECT_EQ(distance(cc.get_pos(), cc.get_events().end()), 0); 
    EXPECT_EQ(cc.get_events().size(), 5); 

    cc.undo();
    cc.undo();
    cc.undo();

    auto p = make_shared<K::NewNodeEvent>(6, 6);
    cc.add_event(p);

    EXPECT_EQ(distance(cc.get_pos(), cc.get_events().end()), 0); 
    EXPECT_EQ(cc.get_events().size(), 3); 

    EXPECT_EQ(static_pointer_cast<K::NewNodeEvent>(*prev(cc.get_pos()))->x_, 6); 
    EXPECT_EQ(static_pointer_cast<K::NewNodeEvent>(*prev(cc.get_pos(), 2))->x_, 1); 
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
