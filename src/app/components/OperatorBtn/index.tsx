import React from "react";
import { Button } from "@chakra-ui/react";

interface OperatorBtnProps {
  operator: string;
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