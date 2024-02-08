#pragma once

#include <string>

using namespace std;

namespace K {

    class UuidFactory {
    public:
        inline string generate() { return string("uuid_") + to_string(i_++); }
        inline void undo() { --i_; }
        inline void reset(int i = 0) { i_ = i; }

        inline void repair(const std::string& s) {
            long long new_candidate = stoll(s.substr(5))+1;
            if (new_candidate > i_) {
                i_ = new_candidate;
            }
        }

    private:
        long long i_ = 0;
    };

} // namespace K
