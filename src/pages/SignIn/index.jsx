import { Container, TitlePage, Form, Label, Input, ErrorP, SubmitBtn, DontHaveAccount } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const loginSchema = yup
  .object({
    email: yup.string().email("É necessário um email válido").required("O campo de email não foi preenchido."),
    password: yup.string().min(6, "A senha deve conter no mínimo 6 caracteres.").required("A senha não foi preenchida.")
  })
  .required()

export function SignIn() {
  
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });


  const onSubmit = (data) => toast(`Email: ${data.email}\n Senha: ${data.password}`);

  return (
    <Container>
      <TitlePage>Inicie sua sessão</TitlePage>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Email:</Label>
        <Input {...register("email")} placeholder="****@seuemail.com.br"/>
        <ErrorP>{errors.email?.message}</ErrorP>

        <Label>Password:</Label>
        <Input {...register("password")} type="password" placeholder="*****"/>
        <ErrorP>{errors.password?.message}</ErrorP>

        <SubmitBtn $outline type="submit"> Entrar</SubmitBtn>

      </Form>

      <DontHaveAccount>Não possuí uma conta? <Link to="/signup">Cadastre-se</Link></DontHaveAccount>

    </Container>
  );
}
