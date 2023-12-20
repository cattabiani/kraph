cmake_minimum_required(VERSION 3.0)
project(Kraph)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(CMAKE_CXX_COMPILER "/opt/cheerp/bin/clang++")
set(CMAKE_CXX_FLAGS "-target cheerp-wasm -O2")

# Include directories
include_directories("src")

file(GLOB SOURCES "src/*.cpp")
add_executable(app.js ${SOURCES})

# Set C++17 features for your target
target_compile_features(app.js PRIVATE cxx_std_17)

install(TARGETS app.js DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/..)
install(FILES ${CMAKE_CURRENT_BINARY_DIR}/app.wasm DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/..)

#cmake . -B build && cmake --build build && cmake --install build && python3 -m http.server