import React from "react";
import { Button } from "@chakra-ui/react";

interface OperatorBtnProps {
  operator: string;
  // voidはundefinedと同義。戻り値がない関数の戻り値を型注釈するにはvoid型を用います。void型は関数の戻り値を型注釈するためにある特別な型です。
  onClick: (operator: string) => void
}

const OperatorBtn = ({ operator, onClick }: OperatorBtnProps) => {
  return (
    <Button onClick={() => onClick(operator)}>
      {operator}
    </Button>
  );
};

export default OperatorBtn;