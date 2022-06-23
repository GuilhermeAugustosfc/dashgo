import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

const singInYupSchema = yup.object().shape({
  email: yup.string().required().email().trim(),
  name: yup.string().required().trim(),
  password: yup.string().required(),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), "Os campos sao diferentes!"]),
});

type SubmitFormValues = {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
};

export default function CreateUser() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(singInYupSchema),
  });

  const handleSubmitUser: SubmitHandler<SubmitFormValues> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(values);
  };

  return (
    <Box>
      <Header />
      <Flex w={"100%"} my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          as="form"
          onSubmit={handleSubmit(handleSubmitUser)}
        >
          <Heading size={"lg"} fontWeight="normal">
            Criar usuario
          </Heading>
          <Divider my={"6"} borderColor="gray.700" />
          <VStack spacing={"8"}>
            <SimpleGrid spacing={["6", "8"]} w="100%" minChildWidth={"240px"}>
              <Input
                name="name"
                label="Nome completo"
                {...register("name")}
                error={errors.name}
              />
              <Input
                name="email"
                type={"email"}
                label="E-mail"
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid spacing={["6", "8"]} w="100%" minChildWidth={"240px"}>
              <Input
                name="password"
                type="password"
                label="Senha"
                {...register("password")}
                error={errors.password}
              />
              <Input
                name="password_confirm"
                type="password"
                label="Comfimar Senha"
                error={errors.confirm_password}
                {...register("confirm_password")}
              />
            </SimpleGrid>
          </VStack>
          <Flex justify={"flex-end"} mt="8">
            <HStack spacing={"4"}>
              <Button colorScheme={"whiteAlpha"}>Salvar</Button>
              <Link href={"/users"} passHref>
                <Button as="a" colorScheme={"pink"}>
                  Cancelar
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
