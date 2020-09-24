import Color from "color";
import styled, { css } from "styled-components";

import { Button as AntButton } from "antd";
import { blue, strongBlue, midGray, red } from "../utils/colors";

const boxShadow = css`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.2),
    inset 0px -1px 0px rgba(0, 0, 0, 0.2);
`;

const Button = styled(AntButton)`
  border-radius: 4px;
  letter-spacing: 0.02em;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 7spx 16px;
  ${boxShadow}
  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: ${props.danger ? red : blue};
      &:hover,
      &:focus,
      &:disabled {
        background-color: ${props.danger
          ? Color(red)
              .darken(0.1)
              .hex()
          : strongBlue};
        color: white;
      }
      &:disabled {
        opacity: 0.5;
        pointer-events: none;
        ${boxShadow}
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      color: ${midGray};
      background-color: white;
      &:hover,
      &:focus {
        color: ${(props) => (props.danger ? red : blue)};
        background-color: white;
      }
      &:disabled {
        opacity: 0.5;
        pointer-events: none;
        color: ${midGray};
        background-color: white;
        ${boxShadow}
      }
    `}
  ${(props) =>
    props.size === "small" &&
    css`
      min-width: 72px;
      height: 28px;
      font-size: 12px;
      line-height: 20px;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      height: 36px;
      min-width: 80px;
      font-size: 14px;
      line-height: 22px;
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      height: 44px;
      min-width: 80px;
      font-size: 14px;
      line-height: 22px;
    `}
    ${(props) =>
      props.centered &&
      css`
        display: block;
        margin: 10px auto;
      `}
`;

Button.defaultProps = {
  primary: true,
  size: "medium",
  disabled: false,
  danger: false,
  centered: false,
};

export const TextButton = styled(Button)`
  box-shadow: none;
  color: ${(props) => (props.danger ? red : blue)};
  padding: 0;
  background: transparent;
  &:hover,
  &:focus {
    background: transparent;
    color: ${(props) => (props.danger ? red : strongBlue)};
  }
  ${(props) =>
    props.secondary &&
    css`
      color: ${midGray};
    `}
`;

export default Button;