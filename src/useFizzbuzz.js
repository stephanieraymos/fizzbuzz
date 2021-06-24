import React, { useMemo, useState, useCallback } from "react";

const useFizzbuzz = (rules) => {
  const [number, setNumber] = useState(0);
  const result = useMemo(() => fizzbuzz(number), [number]);

  const handleClick = useCallback((event) => {
    setNumber((number) => number + 1);
  });

  return [result, handleClick];
};

export default useFizzbuzz;
