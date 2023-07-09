# CSC 318, HW 3 - Part 3 (Calculator Functionality)
Third part of the third homework assignment for CSC 318 (Internet Programming) course

**Name:** Talike Bennett

**Date Completed:** 07/09/2023

**Instructions:** 
Using Javascript and the DOM, you are to add functionality to the buttons of the calculator from the previous part to build a working calculator. Ignore the functionalities of the ( ) buttons and the Deg buttons. 

**Completed Website:** https://tahbee03.github.io/csc318-hw3-pt3/

NOTE: The calculator was designed to process the given operations linearly in a specific way. Since the use of parentheses is undefined for this assignment, the operations are done from left to right. For example, `sin 9 + 4 - 6` is equivalent to `(sin(9) + 4) - 6`.

Below are examples of what the calculator will and will not accept once the equal button is clicked. N represents a number, U represents a unary operator, and B represents a binary operator.

N :white_check_mark: (ex. 9)  
U N :white_check_mark: (ex. sin 4)  
N B N :white_check_mark: (ex. 1 + 2)  
U N B N :white_check_mark: (ex. log 3 ^ 7)  
N B U N :x: (ex. 5 * sin 9)  
N B N B N :white_check_mark: (ex. 6 + 2 - 4)  
U N B U N :x: (ex. sin 6 + cos 4)