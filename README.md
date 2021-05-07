# codewars-solutions
This repositiory contains my solutions to programming challenges (katas) available on [codewars.com](https://www.codewars.com). My profile there can be found [here](https://www.codewars.com/users/3oirtiger).

## Folder sturcture & naming convention
Katas are separated in this repository by kyu (difficulty level; lower is more challenging)
Each kata has its own folder, found at `~/{#} kyu/{name of kata} {kata url slug}`

## Run solutions locally
Each solution file will automatically execute a set of tests taken from Codewars at the time the solution was created or modified.
#### JavaScript
From the directory of a single kata, run:
```bash
node solution.js
```
Note that unless otherwise specified, solutions are made for the codewars runner which uses node 8.x
#### C
C solutions can be compiled using gcc
From the directory of a single kata, run:
```bash
gcc solution.c
./a.out
```
Other compilers can also be used, provided that they are able to link the requisite header files.