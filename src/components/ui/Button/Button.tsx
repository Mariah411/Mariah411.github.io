import { FC } from "react";
type Props = {
  children?: string | JSX.Element | JSX.Element[] | string[];
  size?: "small" | "normal" | "big";
  variant?: "contained" | "outlined";
  color?: "secondary" | "primary" | "danger";
  shape?: "round" | "square";
  classes?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (...args: any[]) => any;
};

const Button: FC<Props> = (props: Props) => {
  const {
    children,
    size = "",
    variant = "contained",
    color = "primary",
    classes,
    shape = "",
    onClick = (e) => {
      e.preventDefault();
    },
  } = props;

  return (
    <button
      onClick={onClick}
      className={`btn ${size} ${variant} ${color} ${shape} ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
