# Description

Kraph (or Katta-Graph) is a simple project to take notes in a graph structure. I started from the need, at a Dungeons and Dragons table, to take notes about various npcs, places, facts, and objects. I needed an [evidence board](https://en.wikipedia.org/wiki/Evidence_board) that was easy to use for my less-IT-savy companions. Thus, I thought about a program that can run in the browser. In order to not incur in privacy problems, I did not want to have a server at all. A serverless application in the browser. This allows anybody with a connection and a PC to take notes at the table. After, investigating various alternatives: javaScript, mobile, Rust, I landed on WebAssembly and JavaScript. The advantages of this approach:

- Nothing to install. 
- Cheap: free github pages.
- The graph can be donwnloaded/uploaded to save progress.

Since it is serverless, everything can be hosted on the [github pages](https://cattabiani.github.io/kraph/).

# TODO

Adapt the project to be used on mobile.

# For the Developers

## Project Structure

- **src**: Place your C++ source and header files here.
- **build**: Output directory for build artifacts.

## Building the Project

To build the project, you can use CMake and Ninja:

```bash
cmake -G Ninja . -DTESTS=ON -B build && cmake --build build && ./build/tests
cmake -G Ninja . -DTESTS=OFF -B build && cmake --build build && cmake --install build && python3 -m http.server
```

## Git pre-commit

In order to make git auto-format when you push you need to link the pre-commit in the .git folder:

```bash
ln -s pre-commit .git/hooks/pre-commit
```
