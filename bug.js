function foo(a) {
  return a + bar();
}

function bar() {
  return 1;
}

foo(2); // Returns 3