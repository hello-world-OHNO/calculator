import React from "react";
import { Button } from "@chakra-ui/react";

interface EqualBtnProps {
  onClick: () => void;
}

const EqualBtn = ({ onClick }: EqualBtnProps) => {
  return (
    <Button onClick={onClick} colorScheme="blue">
      =
    </Button>
  );
};

export default EqualBtn;
