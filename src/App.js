import React from "react";
import NextNumber from "./Fizzbuzz";
import { useFizzbuzz } from "./Fizzbuzz";
const App = () => {
  function fizzbuzz(number, rules) {
    for (let [condition, result] of rules.entries()) {
      if (number % condition === 0) return result;
    }

    return number;
  }
  return (
    <>
      <NextNumber fizzbuzz={fizzbuzz} />
      <useFizzbuzz fizzbuzz={fizzbuzz} />;
    </>
  );
};

export default App;
