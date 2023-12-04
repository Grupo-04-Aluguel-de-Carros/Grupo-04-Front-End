import { LoginBtn } from "./styles";

export function CustomButton({ name, outline, ...rest }) {
  return (
    <LoginBtn $outline={outline} {...rest}>
      {name}
    </LoginBtn>

  );
}
