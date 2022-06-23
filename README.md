<div align="center">

  <h1><code>Rust Web-Assembly </code></h1>

  <div align="center">

For the medium blog ==> [Game of Life](https://blog.devgenius.io/the-sweet-taste-of-wasm-rust-42e08fc7a99b)

  <h1><code>Rust Web-Assembly </code></h1>

<h3>What is this?</h3>

We will build and animate Conway's Game of Life. Simply put, there is a 2D grid that hosts cells of 2 kinds: dead or alive. Cell being dead or alive is not hardcoded nor it is random. It follows logic and is dynamic. Each cell in the grid can interact with eight of its neighbours (X-axis, Y-axis and diagonal) There are some basic rules that decide whether a cell should be dead or alive in a given time t

a) Cell is alive and has less than 2 alive neighbours => Cell dies

b) Cell is alive and has 2 or 3 alive neighbours => Cell lives.

c) Cell is alive and has more than 3 alive neighbours => cell dies

d) Cell is dead and has 3 alive neighbours => Cell resurrects.

Initially, we seed the grid simultaneously through the seeding and the rules above are active, new births and deaths occur, and that also triggers another one.



## 🚴 Ta Da!!

  ![img](game.gif)
