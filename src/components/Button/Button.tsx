import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit";
  disabled?: boolean;
}

const Button = ({
  text,
  onClick,
  type = "button",
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled type={type} onClick={onClick} disabled={disabled}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
