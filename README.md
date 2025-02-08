# Hoisting Issue in JavaScript Function Calls

This repository demonstrates a common, yet subtle, error in JavaScript related to hoisting.  The code in `bug.js` showcases a scenario where a function calls another function defined later in the script. While this *might* work in many cases, it's not guaranteed due to the way JavaScript handles hoisting.

The solution in `bugSolution.js` demonstrates how to resolve this by ensuring the function called (`bar`) is defined before the function that calls it (`foo`).  This avoids the potential hoisting-related issue. This is best practice to avoid unexpected behavior.

## How to reproduce the issue

1. Clone this repository.
2. Open `bug.js` and run it in a JavaScript environment.
3. Observe that it likely works without error.  However, this is not reliable behavior across all environments.

## Solution

Refer to `bugSolution.js` for a corrected version of the code, where the function definition order is modified to prevent potential issues. 