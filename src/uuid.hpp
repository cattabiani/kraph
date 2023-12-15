#pragma once

#include <string>

using namespace std;

namespace K {

    class UuidFactory {
    public:
        string generateNewUuid() { return string("uuid_") + to_string(i_++); }

    private:
        long long i_ = 0;
    };

} // namespace K
