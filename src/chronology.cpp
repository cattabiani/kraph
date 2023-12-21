#include "chronology.hpp"

using namespace std;


K::Chronology& K::Chronology::get_instance() {
    static Chronology gg{};
    return gg;
}

void K::Chronology::add_event(shared_ptr<Event> e) {
    events_.erase(pos_, events_.end());
    events_.push_back(e);
    pos_ = prev(events_.end());
    redo();
}

void K::Chronology::undo() {
    if (pos_ == events_.begin()) return;
    --pos_;
    (*pos_)->undo(gg_);
}

void K::Chronology::redo() {
    if (pos_ == events_.end()) return;
    (*pos_)->redo(gg_);
    ++pos_;
}
