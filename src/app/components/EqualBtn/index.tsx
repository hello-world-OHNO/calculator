import React from "react";
import { Button } from "@chakra-ui/react";

const EqualBtn = ({ onClick, disabled }: { onClick: () => void, disabled: boolean }) => {
  return (
    <Button onClick={onClick} colorScheme="blue" disabled={disabled}>
      =
    </Button>
  );
};

export default EqualBtn;
