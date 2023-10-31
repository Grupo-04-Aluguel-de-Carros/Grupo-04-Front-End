import { Container, TitlePage, Form, Label, Input, ErrorP, SubmitBtn, DontHaveAccount } from "../SignIn/styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const loginSchema = yup
  .object({
    name: yup.string().min(3, "Precisa ter no mínimo 3 caracteres").required("É necessário um nome válido"),
    surname: yup.string().min(3, "Precisa ter no mínimo 3 caracteres").required("É necessário um sobrenome válido"),
    email: yup.string().email("É necessário um email válido").required("O campo de email não foi preenchido."),
    confirm_email: yup.string().label('Confirmar email').required("Você precisa confirmar o seu email").oneOf([yup.ref('email'), null], 'Os emails precisam ser iguais.'),
    password: yup.string().min(6, "A senha deve conter no mínimo 6 caracteres.").required("A senha não foi preenchida."),
    confirm_password: yup.string().label('Confirmar senha').required("Você precisa confirmar a sua senha").oneOf([yup.ref('password'), null], 'A senhas precisam ser iguais.'),
  })
  .required()

export function SignUp() {
  
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });


  const onSubmit = (data) => console.log({
    name: data.name,
    surname: data.surname,
    email: data.email,
    password: data.password,
  });

  return (
    <Container>
      <TitlePage>Crie sua conta</TitlePage>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome:</Label>
        <Input {...register("name")} placeholder="Digite seu primeiro nome"/>
        <ErrorP>{errors.name?.message}</ErrorP>

        <Label>Sobrenome:</Label>
        <Input {...register("surname")} placeholder="Digite seu sobrenome"/>
        <ErrorP>{errors.surname?.message}</ErrorP>

        <Label>Email:</Label>
        <Input {...register("email")} placeholder="****@seuemail.com.br"/>
        <ErrorP>{errors.email?.message}</ErrorP>

        <Label>Confirmar seu email:</Label>
        <Input {...register("confirm_email")} placeholder="****@seuemail.com.br"/>
        <ErrorP>{errors.confirm_email?.message}</ErrorP>

        <Label>Senha:</Label>
        <Input {...register("password")} type="password" placeholder="*****"/>
        <ErrorP>{errors.password?.message}</ErrorP>

        <Label>Confirmar senha:</Label>
        <Input {...register("confirm_password")} type="password" placeholder="*****"/>
        <ErrorP>{errors.confirm_password?.message}</ErrorP>

        <SubmitBtn $outline type="submit">Registrar</SubmitBtn>

      </Form>

      <DontHaveAccount>Já possuí uma conta? <Link to="/signin">Faça seu login</Link></DontHaveAccount>

    </Container>
  );
}
