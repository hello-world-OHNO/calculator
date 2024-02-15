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
  // =ボタンのstateを追加しました。
  const [equalClicked, setEqualClicked] = useState<boolean>(false);

  // 桁数上限
  const limitDigits = 12;
  // 電卓の数字
  const calculatorNumber1 = 1
  const calculatorNumber2 = 2
  const calculatorNumber3 = 3
  const calculatorNumber4 = 4
  const calculatorNumber5 = 5
  const calculatorNumber6 = 6
  const calculatorNumber7 = 7
  const calculatorNumber8 = 8
  const calculatorNumber9 = 9
  const calculatorNumber0 = 0

  // 数字が押された時のアクション
  const handleNumberClick = (number: number) => {
    if (equalClicked) {
      // 計算結果が表示されている場合は新しい数字が入力されたときにリセットする
      setDisplay(number.toString());
      setEqualClicked(false);
      return;
    }
    if (display === "0") {
      setDisplay(number.toString());
      return;
      // 12桁以下か判定
    } else if (display.length < limitDigits) {
      setDisplay(prevDisplay => prevDisplay + number.toString());
    }
  };

  // 四則演算が押された時のアクション
  const handleOperatorClick = (operator: string) => {
    setMemory(parseFloat(display));
    setOperator(operator);
    setDisplay("0");
    setEqualClicked(false);
  };

  // ＝ボタンが押されたときのアクション
  const handleEqualClick = () => {
    if (memory === null || operator === null) {
      return;
    }
    const result = (() => {
      switch (operator) {
        case '+':
          return memory + parseFloat(display);
        case '-':
          return memory - parseFloat(display);
        case '*':
          return memory * parseFloat(display);
        case '/':
          return memory / parseFloat(display);
        default:
          return 0;
      }
    })();
    const resultString = Number.isInteger(result) ? result.toString() : result.toFixed(limitDigits);

    setMemory(null);
    setOperator(null);
    setDisplay(resultString);
    setEqualClicked(true);
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
          {[calculatorNumber7, calculatorNumber8, calculatorNumber9].map((number) => (
            <NumberBtn key={number} number={number} onClick={handleNumberClick} />
          ))}
          <OperatorBtn operator="+" onClick={handleOperatorClick} />
          {[calculatorNumber4, calculatorNumber5, calculatorNumber6].map((number) => (
            <NumberBtn key={number} number={number} onClick={handleNumberClick} />
          ))}
          <OperatorBtn operator="-" onClick={handleOperatorClick} />
          {[calculatorNumber1, calculatorNumber2, calculatorNumber3].map((number) => (
            <NumberBtn key={number} number={number} onClick={handleNumberClick} />
          ))}
          <OperatorBtn operator="*" onClick={handleOperatorClick} />
          <NumberBtn number={calculatorNumber0} onClick={handleNumberClick} />
          <Spacer />
          <EqualBtn onClick={handleEqualClick} disabled={equalClicked} />
          <OperatorBtn operator="/" onClick={handleOperatorClick} />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
