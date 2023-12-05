import { useState } from "react";
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

import { useAuth } from "../../hooks/useAuth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = useAuth();

  const navigate = useNavigate();  

  function onSubmit(data) {
    try {
      signIn(data.email, data.password);
    } catch (error) {
      toast.error("Não foi possível realizar seu login. Tente mais tarde.");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <Container>
      <TitlePage>Inicie sua sessão</TitlePage>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Email:</Label>
        <Input {...register("email")} placeholder="****@seuemail.com.br"/>
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
          $outline
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
