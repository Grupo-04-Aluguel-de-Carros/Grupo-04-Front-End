import {
  Container,
  TitlePage,
  Form,
  Label,
  InputDiv,
  Input,
  InputIconClose,
  InputIconOpen,
  ErrorP,
  DontHaveAccount,
} from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CustomButton } from "../../components/Button";

const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("É necessário um email válido")
      .required("O campo de email não foi preenchido."),
    password: yup
      .string()
      .min(6, "A senha deve conter no mínimo 6 caracteres.")
      .required("A senha não foi preenchida."),
  })
  .required();

export function SignIn() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) =>
    toast(`Email: ${data.email}\n Senha: ${data.password}`);

  return (
    <Container>
      <TitlePage>Inicie sua sessão</TitlePage>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Email:</Label>
        <Input {...register("email")} placeholder="****@seuemail.com.br" />
        <ErrorP>{errors.email?.message}</ErrorP>

        <Label>Password:</Label>
        <InputDiv>
          <Input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="*****"
          />
          {showPassword ? (
            <InputIconOpen
              onClick={() => setShowPassword((prevCheck) => !prevCheck)}
              showPassword
            />
          ) : (
            <InputIconClose
              onClick={() => setShowPassword((prevCheck) => !prevCheck)}
              showPassword
            />
          )}
        </InputDiv>
        <ErrorP>{errors.password?.message}</ErrorP>

        <CustomButton
          name="Entrar"
          type="submit"
          style={{ padding: "10px", marginTop: "10px" }}
        />
      </Form>

      <DontHaveAccount>
        Não possuí uma conta?{" "}
        <CustomButton
          onClick={() => navigate("/signup")}
          name="Cadastre-se"
          $outline
          style={{ marginLeft: "10px" }}
        />
      </DontHaveAccount>
    </Container>
  );
}
