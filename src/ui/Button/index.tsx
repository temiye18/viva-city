import Btn from "./styles";
import { type ReactNode, ComponentPropsWithoutRef, FC } from "react";

type Props = {
  variant?: "v-one" | "v-two" | "v-three";
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;
const Button: FC<Props> = ({ className, variant, children, ...rest }) => {
  return (
    <Btn className={className} $variant={variant} {...rest}>
      {children}
    </Btn>
  );
};

export default Button;
