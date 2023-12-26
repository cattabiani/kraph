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
    bool cont = true;
    while (cont && pos_ != events_.begin()) {
        --pos_;
        cont = (*pos_)->is_triggered_;
        (*pos_)->undo(gg_);
    }
}

void K::Chronology::redo() {
    if (pos_ == events_.end())
        return;
    ++pos_;
    (*prev(pos_))->redo(gg_);

    if (pos_ == events_.end())
        return;

    bool cont = (*pos_)->is_triggered_;
    while (cont) {
        ++pos_;
        (*prev(pos_))->redo(gg_);
        if (pos_ == events_.end())
            return;
        cont = (*pos_)->is_triggered_;
    }
}

void K::Chronology::push_back_event(shared_ptr<K::Event> e) {
    events_.push_back(e);
}

shared_ptr<K::Event> K::Chronology::pop_back_event() {
    if (events_.empty())
        return nullptr;
    auto ans = events_.back();
    events_.pop_back();
    return ans;
}
