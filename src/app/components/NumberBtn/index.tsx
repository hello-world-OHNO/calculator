import React from "react";
import { Button } from "@chakra-ui/react";

interface NumberBtnProps {
  number: number;
  onClick: (number: number) => void;
}

// React.FCを使用せずに関数コンポーネントを定義
const NumberBtn = ({ number, onClick }: NumberBtnProps) => {
  return (
    <Button onClick={() => onClick(number)}>
      {number}
    </Button>
  );
};

export default NumberBtn;
