#pragma once

#include <string>

using namespace std;

namespace K {

    class UuidFactory {
    public:
        string generate() { return string("uuid_") + to_string(i_++); }
        void undo() { --i_; }
        void reset(int i = 0) { i_ = i; }

    private:
        long long i_ = 0;
    };

} // namespace K
