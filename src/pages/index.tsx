import { Flex, Button } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SubmitValues = {
  email: string;
  password: string;
};

const singInYupSchema = yup.object().shape({
  email: yup.string().required().email().trim(),
  password: yup.string().required(),
});

export default function SingIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(singInYupSchema),
  });

  const handleSubmitSingIn: SubmitHandler<SubmitValues> = async (values) => {
    await new Promise((resolver) => setTimeout(resolver, 2000));
    console.log(values);
  };

  return (
    <Flex w={"100vw"} h={"100vh"} alignItems={"center"} justify={"center"}>
      <Flex
        as={"form"}
        width={"100%"}
        maxWidth={360}
        bg={"gray.800"}
        p={"8"}
        borderRadius={8}
        flexDir={"column"}
        gap={3}
        onSubmit={handleSubmit(handleSubmitSingIn)}
      >
        <Input
          label="E-mail"
          type={"email"}
          name={"email"}
          {...register("email")}
          error={errors.email}
        />
        <Input
          label="Senha"
          type={"password"}
          name={"password"}
          error={errors.password}
          {...register("password")}
        />

        <Button type="submit" mt={"6"} colorScheme={"pink"}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
