"use client";
import { Box, ChakraProvider, Grid, GridItem, Spacer } from "@chakra-ui/react";
import NumberBtn from "./components/NumberBtn/index";
import OperatorBtn from "./components/OperatorBtn/index";
import EqualBtn from "./components/EqualBtn/index";
import { useState } from 'react';

export default function Home() {
  const [display, setDisplay] = useState<string>("0");
  const [memory, setMemory] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  // 数字押された時のアクション
  const handleNumberClick = (number: number) => {
    if (display === "0") {
      setDisplay(number.toString());
      // 12桁以下か判定
    } else if (display.length < 12) {
      setDisplay(prevDisplay => prevDisplay + number.toString());
    }
  };

  // 四則演算が押された時のアクション
  const handleOperatorClick = (operator: string) => {
    setMemory(parseFloat(display));
    setOperator(operator);
    setDisplay("0");
  };

  // ＝が押されたときのアクション
  const handleEqualClick = () => {
    if (memory !== null && operator !== null) {
      let result: number;
      switch (operator) {
        case '+':
          result = memory + parseFloat(display);
          break;
        case '-':
          result = memory - parseFloat(display);
          break;
        case '*':
          result = memory * parseFloat(display);
          break;
        case '/':
          result = memory / parseFloat(display);
          break;
        default:
          result = 0;
      }
      // 表示結果を12桁を上限にする
      const resultString = result.toFixed(12);
      setDisplay(resultString);
      setMemory(null);
      setOperator(null);
    }
  };
  return (
    <ChakraProvider>
      <Box border="solid" maxWidth="300px" height="450px" margin="0 auto">
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={2}
          height="100%"
          alignItems="center"
          justifyContent="center"
          padding={4}
        >
          <GridItem colSpan={4} textAlign="right">
            {display}
          </GridItem>
          <NumberBtn number={7} onClick={handleNumberClick} />
          <NumberBtn number={8} onClick={handleNumberClick} />
          <NumberBtn number={9} onClick={handleNumberClick} />
          <OperatorBtn operator="+" onClick={handleOperatorClick} />
          <NumberBtn number={4} onClick={handleNumberClick} />
          <NumberBtn number={5} onClick={handleNumberClick} />
          <NumberBtn number={6} onClick={handleNumberClick} />
          <OperatorBtn operator="-" onClick={handleOperatorClick} />
          <NumberBtn number={1} onClick={handleNumberClick} />
          <NumberBtn number={2} onClick={handleNumberClick} />
          <NumberBtn number={3} onClick={handleNumberClick} />
          <OperatorBtn operator="*" onClick={handleOperatorClick} />
          <NumberBtn number={0} onClick={handleNumberClick} />
          <Spacer />
          <EqualBtn onClick={handleEqualClick} />
          <OperatorBtn operator="/" onClick={handleOperatorClick} />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
