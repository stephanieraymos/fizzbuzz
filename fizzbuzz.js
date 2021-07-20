function fizz1() {
  for (i = 0; i < 100; ) {
    console.log(((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz")) | i);
  }
  return;
}

function fizz2() {
  for (i = 0; i < 100; ) {
    console.log(
      ((++i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "")) | i
    );
  }
  return;
}

fizz1();
