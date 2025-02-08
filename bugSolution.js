function bar() {
  return 1;
}

function foo(a) {
  return a + bar();
}

foo(2); // Returns 3 (reliably) 