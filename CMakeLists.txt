# CMakeLists.txt
cmake_minimum_required(VERSION 3.0)
project(Kraph)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

file(GLOB SOURCES "src/*.cpp")

if(TESTS)
    find_package(GTest REQUIRED)
    include_directories(${GTEST_INCLUDE_DIRS})
    file(GLOB TEST_SOURCES "tests/*.cpp")
    list(REMOVE_ITEM SOURCES "${CMAKE_CURRENT_SOURCE_DIR}/src/main.cpp" "${CMAKE_CURRENT_SOURCE_DIR}/src/jsexports.cpp")
    add_executable(tests ${SOURCES} ${TEST_SOURCES})
    target_link_libraries(tests PRIVATE ${GTEST_LIBRARIES} pthread)
    target_compile_definitions(tests PRIVATE TESTS=1)
else()
    # Configuration for the main app
    set(CMAKE_CXX_COMPILER "/opt/cheerp/bin/clang++")
    set(CMAKE_CXX_FLAGS "-target cheerp-wasm -O2")

    # Include directories for the main app
    include_directories("src")

    # Main app target
    add_executable(app.js ${SOURCES})
    install(TARGETS app.js DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/..)
    install(FILES ${CMAKE_CURRENT_BINARY_DIR}/app.wasm DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/..)
endif()

# cmake -G Ninja . -DTESTS=ON -B build && cmake --build build && ./build/tests
# cmake -G Ninja . -DTESTS=OFF -B build && cmake --build build && cmake --install build && python3 -m http.server

