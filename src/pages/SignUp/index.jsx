import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import {
  Container,
  TitlePage,
  Form,
  Label,
  Input,
  ErrorP,
  DontHaveAccount,
  InputDiv,
  InputIconOpen,
  InputIconClose,
} from "../SignIn/styles";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomButton } from "../../components/Button";

const loginSchema = yup
  .object({
    name: yup
      .string()
      .min(3, "Precisa ter no mínimo 3 caracteres")
      .required("É necessário um nome válido"),
    surname: yup
      .string()
      .min(3, "Precisa ter no mínimo 3 caracteres")
      .required("É necessário um sobrenome válido"),
    age: yup.string().required("O campo de idade não foi preenchido."),
    cpf: yup
      .string()
      .min(6, "informe um cpf válido")
      .required("O campo CPF não foi preenchido."),
    phoneNumber: yup.string().required("O campo telefone não foi preenchido."),
    email: yup
      .string()
      .email("É necessário um email válido")
      .required("O campo de email não foi preenchido."),
    confirm_email: yup
      .string()
      .label("Confirmar email")
      .required("Você precisa confirmar o seu email")
      .oneOf([yup.ref("email"), null], "Os emails precisam ser iguais."),
    password: yup
      .string()
      .min(6, "A senha deve conter no mínimo 6 caracteres.")
      .required("A senha não foi preenchida."),
    confirm_password: yup
      .string()
      .label("Confirmar senha")
      .required("Você precisa confirmar a sua senha")
      .oneOf([yup.ref("password"), null], "A senhas precisam ser iguais."),
  })
  .required();

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const navigate = useNavigate();
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  function onSubmit(data) {

    const userCreate = {
        name: data.name,
        surname: data.surname,
        age: data.age,
        cpf: data.cpf,
        phoneNumber: data.phoneNumber,
        email: data.email,
        password: data.password,
      }

    createUser(userCreate)
  }

  return (
    <Container>
      <TitlePage>Crie sua conta</TitlePage>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome:</Label>
        <Input {...register("name")} placeholder="Digite seu primeiro nome" />
        <ErrorP>{errors.name?.message}</ErrorP>

        <Label>Sobrenome:</Label>
        <Input {...register("surname")} placeholder="Digite seu sobrenome" />
        <ErrorP>{errors.surname?.message}</ErrorP>

        <Label>Informe sua idade:</Label>
        <Input {...register("age")} placeholder="" />
        <ErrorP>{errors.age?.message}</ErrorP>

        <Label>CPF:</Label>
        <Input {...register("cpf")} placeholder="Informe seu CPF" />
        <ErrorP>{errors.cpf?.message}</ErrorP>

        <Label>Telefone:</Label>
        <Input
          {...register("phoneNumber")}
          placeholder="Informe um telefone de contato"
        />
        <ErrorP>{errors.phoneNumber?.message}</ErrorP>

        <Label>Email:</Label>
        <Input {...register("email")} placeholder="****@seuemail.com.br" />
        <ErrorP>{errors.email?.message}</ErrorP>

        <Label>Confirmar seu email:</Label>
        <Input
          {...register("confirm_email")}
          placeholder="****@seuemail.com.br"
        />
        <ErrorP>{errors.confirm_email?.message}</ErrorP>

        <Label>Senha:</Label>
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

        <Label>Confirmar senha:</Label>

        <InputDiv>
          <Input
            {...register("confirm_password")}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="*****"
          />
          {showConfirmPassword ? (
            <InputIconOpen
              onClick={() => setShowConfirmPassword((prevCheck) => !prevCheck)}
              showPassword
            />
          ) : (
            <InputIconClose
              onClick={() => setShowConfirmPassword((prevCheck) => !prevCheck)}
              showPassword
            />
          )}
        </InputDiv>
        <ErrorP>{errors.confirm_password?.message}</ErrorP>

        <CustomButton
          name="Registrar"
          type="submit"
          style={{ padding: "10px", marginTop: "10px" }}
        />
      </Form>

      <DontHaveAccount>
        Já possuí uma conta?{" "}
        <CustomButton
          onClick={() => navigate("/signin")}
          name="Faça seu login"
          $outline
          style={{ marginLeft: "10px" }}
        />
      </DontHaveAccount>
    </Container>
  );
}
