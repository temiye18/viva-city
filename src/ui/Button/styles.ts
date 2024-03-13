import styled, { css } from "styled-components";
type StyledButtonProps = {
  $variant?: string;
};
const Btn = styled.button<StyledButtonProps>`
  all: unset;
  padding: 0.6875rem 0;
  text-align: center;
  border-radius: 22px;
  background-color: transparent;
  cursor: pointer;
  color: var(--white);
  font-family: inherit;
  font-size: clamp(0.75rem, 0.6458rem + 0.3333vw, 0.9375rem);
  font-weight: 500;

  ${({ $variant }) => {
    if ($variant === "v-one") {
      return css`
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
      `;
    } else if ($variant === "v-two") {
      return css`
        background-color: var(--primary-color);
        color: var(--secondary-color);
      `;
    } else if ($variant === "v-three") {
      return css`
        background-color: var(--secondary-color);
      `;
    }
  }}
`;

export default Btn;
