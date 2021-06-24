import React, { useMemo, useState, useCallback } from "react";

// functional component
const NextNumber = ({ rules, fizzbuzz }) => {
  let [result, handleClick] = useFizzbuzz(rules);
  // {3: "fizz", 5: "buzz", 15: "fizzbuzz"}

  function testFizzbuzz(assert) {
    let rules = { 3: "fizz", 5: "buzz", 15: "fizzbuzz" };
    assert(fizzbuzz(1, rules) === 1);
    assert(fizzbuzz(3, rules) === "fizz");
    assert(fizzbuzz(5, rules) === "buzz");
    assert(fizzbuzz(15, rules) === "fizzbuzz");
    assert(fizzbuzz(0, rules) === "fizz");
    assert(fizzbuzz(-1, rules) === -1);
  }

  return (
    <>
      <span>{result}</span>
      <button onClick={handleClick}>Next</button>
    </>
  );
};

export const useFizzbuzz = ({ fizzbuzz }) => {
  const [number, setNumber] = useState(0);
  const result = useMemo(() => fizzbuzz(number), [number]);

  const handleClick = useCallback((event) => {
    setNumber((number) => number + 1);
  });

  return [result, handleClick];
};
// example input
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].forEach(
//   fizzbuzz
// );

// expected output
// If number is a multiple of 3 (1, 3, 6, 9...) then console.log(fizz)
// If number is a multiple of 5

//1
//2
//fizz
//4
//buzz
//fizz
//7
//8
//fizz

export default NextNumber;
