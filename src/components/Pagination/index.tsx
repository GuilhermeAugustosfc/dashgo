import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";
interface PaginationProps {
  totalCountOfRegister: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generateArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}
export function Pagination({
  totalCountOfRegister,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegister / registersPerPage);

  const previusPage =
    currentPage > 1
      ? generateArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const newsPages =
    currentPage < lastPage
      ? generateArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={"row"}
      mt="8"
      justify={"space-between"}
      align="center"
      spacing={"6"}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> ate <strong>100</strong>
      </Box>
      <Stack direction={"row"} spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem>1</PaginationItem>
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width={6} textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previusPage.length > 0 &&
          previusPage.map((page) => (
            <PaginationItem key={page}>{page}</PaginationItem>
          ))}

        <PaginationItem isCurrent>{currentPage}</PaginationItem>

        {newsPages.length > 0 &&
          newsPages.map((page) => (
            <PaginationItem key={page}>{page}</PaginationItem>
          ))}

        {currentPage + siblingsCount > lastPage && (
          <>
            {currentPage + 1 + siblingsCount > lastPage && (
              <Text color="gray.300" width={6} textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem>{totalCountOfRegister}</PaginationItem>
          </>
        )}
      </Stack>
    </Stack>
  );
}
