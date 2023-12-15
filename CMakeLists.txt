cmake_minimum_required(VERSION 3.0)
project(Kraph)

set(CMAKE_CXX_COMPILER "/opt/cheerp/bin/clang++")
set(CMAKE_CXX_FLAGS "-target cheerp-wasm -O2")

# Include directories
include_directories("src")

file(GLOB SOURCES "src/*.cpp")
add_executable(app.js ${SOURCES})

install(TARGETS app.js DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/..)
install(FILES ${CMAKE_CURRENT_BINARY_DIR}/app.wasm DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/..)