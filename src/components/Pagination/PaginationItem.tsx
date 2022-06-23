import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PaginatinItemProps {
  isCurrent?: boolean;
  children: ReactNode;
}
export function PaginationItem({
  isCurrent = false,
  children,
}: PaginatinItemProps) {
  if (isCurrent) {
    return (
      <Button
        size={"sm"}
        fontSize="xs"
        width={"4"}
        colorScheme="pink"
        disabled
        _disabled={{ bg: "pink.500", cursor: "default" }}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      size={"sm"}
      fontSize="xs"
      width={"4"}
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {children}
    </Button>
  );
}
