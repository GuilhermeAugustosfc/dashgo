import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useQuery } from "react-query";
import { api } from "../../service/api";
import { useUsers } from "../../service/hooks/useUsers";

export default function UserList() {
  const { isLoading, data, isError, isFetched } = useUsers();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w={"100%"} my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify={"space-between"} align="center">
            <Heading size="lg" fontWeight={"normal"}>
              Usuarios
              {!isLoading && isFetched && (
                <Spinner size={"sm"} color="gray.500" ml="4" />
              )}
            </Heading>
            <Button
              as="a"
              size={"sm"}
              fontSize="sm"
              colorScheme={"pink"}
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo usuario
            </Button>
          </Flex>
          {isLoading ? (
            <Flex justify={"center"}>
              <Spinner />
            </Flex>
          ) : isError ? (
            <Text colorScheme={"red"}>Dados do usuario nao encontrados</Text>
          ) : (
            <>
              <Table colorScheme={"whiteAlpha"}>
                <Thead>
                  <Tr>
                    <Th px="6" color={"gray.300"} width="8">
                      <Checkbox colorScheme={"pink"} />
                    </Th>
                    <Th>Usuarios</Th>
                    {isWideVersion && <Th>Data de cadastros</Th>}
                    <Th width={8}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user) => (
                    <Tr>
                      <Td px="6" color={"gray.300"} width="8">
                        <Checkbox colorScheme={"pink"} />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight={"bold"}>{user.name}</Text>
                          <Text fontSize={"sm"} color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
                      <Td>
                        <Button
                          as="a"
                          size={"sm"}
                          fontSize="sm"
                          colorScheme={"purple"}
                          leftIcon={<Icon as={RiPencilLine} fontSize="20" />}
                        >
                          Editar
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegister={200}
                currentPage={5}
                onPageChange={() => {}}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
