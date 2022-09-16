import { useState } from "react";

export const useInput = (initialValue) => {
  const [inputs, setInputs] = useState(initialValue || {});

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return [inputs, handleOnChange];
};
