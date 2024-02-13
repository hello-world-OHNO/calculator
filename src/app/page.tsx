"use client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import NumberBtn from "./components/NumberBtn/index";
import OperatorBtn from "./components/OperatorBtn/index";
import EqualBtn from "./components/EqualBtn/index";
import { use, useState } from 'react';
import { set, useForm } from "react-hook-form";

export default function Home() {
  const [display, setDisplay] = useState<number>(0);
  const [memory, setMemory] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumberClick = (number: number) => {
    if (display === 0) {
      setDisplay(number);
    } else {
      setDisplay(prevDisplay => prevDisplay * 10 + number)
    }
  };

  const handleOperatorClick = (operator: string) => {
    setMemory(display);
    setOperator(operator);
    setDisplay(0);
  };

  const handleEqualClick = () => {
    if (memory !== null && operator !== null) {
      switch (operator) {
        case '+':
          setDisplay(memory + display);
          break;
        case '-':
          setDisplay(memory - display);
          break;
        case '*':
          setDisplay(memory * display);
          break;
        case '/':
          setDisplay(memory / display);
          break;
      }
      setMemory(null);
      setOperator(null);
    }
  };

  return (
    <ChakraProvider>
      <Box border="solid" maxWidth="300px" height="450px" margin="0 auto">
        <div>{display}</div>
        <NumberBtn number={1} onClick={handleNumberClick} />
        <NumberBtn number={2} onClick={handleNumberClick} />
        <NumberBtn number={3} onClick={handleNumberClick} />
        <NumberBtn number={4} onClick={handleNumberClick} />
        <NumberBtn number={5} onClick={handleNumberClick} />
        <NumberBtn number={6} onClick={handleNumberClick} />
        <NumberBtn number={7} onClick={handleNumberClick} />
        <NumberBtn number={8} onClick={handleNumberClick} />
        <NumberBtn number={9} onClick={handleNumberClick} />
        <NumberBtn number={0} onClick={handleNumberClick} />
        <OperatorBtn operator="+" onClick={handleOperatorClick} />
        <OperatorBtn operator="-" onClick={handleOperatorClick} />
        <OperatorBtn operator="*" onClick={handleOperatorClick} />
        <OperatorBtn operator="/" onClick={handleOperatorClick} />
        <EqualBtn onClick={handleEqualClick} />
      </Box>
    </ChakraProvider>
  );
}
