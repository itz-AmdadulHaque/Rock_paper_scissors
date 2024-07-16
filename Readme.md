# Rock Paper Scissor game

Unlike tradition game this game support 3 or more then 3 moves.

start game `npm start rock paper 3rd 4th 5th`

remember moves name must be uniqe and number of total moves must be odd.

### Game rule

```
Math.sign((a - b + p + n) % n - p) this value decide player won or loss

value = 1, player lose
value = -1, player win
value = 0, draw
```

### Game rule got from this logic bellow-

```
So, let's say we have n = 7 (seven moves). Computer move a and user move b lays in the range from 0 upto n - 1 = 6. The p or "half of the n" is 3.

We will draw a against b in the table. Let's calculate a - b.
 0 -1 -2 -3 -4 -5 -6
 1  0 -1 -2 -3 -4 -5
 2  1  0 -1 -2 -3 -4
 3  2  1  0 -1 -2 -3
 4  3  2  1  0 -1 -2
 5  4  3  2  1  0 -1
 6  5  4  3  2  1  0

We got some kind of the "signed distance".

We need to add p to have "a breaking point" in the middle, not at 0, because we need to "wrap around" our values. So, we calculate a - b + p.
 3  2  1  0 -1 -2 -3
 4  3  2  1  0 -1 -2
 5  4  3  2  1  0 -1
 6  5  4  3  2  1  0
 7  6  5  4  3  2  1
 8  7  6  5  4  3  2
 9  8  7  6  5  4  3

Now we add n because, well, we need to remember that there are two groups of progamming languages. Languages from one group (like Ruby or Python) calculate (-2) % 5 as 3, which is the proper mathematical value and, in fact, the convinient one in most practical cases. Languages from the other group (Java, C#, JavaScript) calculate (-2) % 5 as -2. What can you do, life is unfair. Deal with it.

This is a - b + p + n and now we can forget about negative values.
10  9  8  7  6  5  4
11 10  9  8  7  6  5
12 11 10  9  8  7  6
13 12 11 10  9  8  7
14 13 12 11 10  9  8
15 14 13 12 11 10  9
16 15 14 13 12 11 10

The next step is trivial, we calculate the remainder and get (a - b + p + n) % n.
 3  2  1  0  6  5  4
 4  3  2  1  0  6  5
 5  4  3  2  1  0  6
 6  5  4  3  2  1  0
 0  6  5  4  3  2  1
 1  0  6  5  4  3  2
 2  1  0  6  5  4  3

It begins to look like our winning table. We need to shift it back to zero by subtracting (a - b + p + n) % n - p.
0 -1 -2 -3  3  2  1
 1  0 -1 -2 -3  3  2
 2  1  0 -1 -2 -3  3
 3  2  1  0 -1 -2 -3
-3  3  2  1  0 -1 -2
-2 -3  3  2  1  0 -1
-1 -2 -3  3  2  1  0

Well, that's it, we can check the sign, but it would be "nicer" just to apply sign function like Math.sign((a - b + p + n) % n - p).
 0 -1 -1 -1  1  1  1
 1  0 -1 -1 -1  1  1
 1  1  0 -1 -1 -1  1
 1  1  1  0 -1 -1 -1
-1  1  1  1  0 -1 -1
-1 -1  1  1  1  0 -1
-1 -1 -1  1  1  1  0
```
