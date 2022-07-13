import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 100%;
  max-width: ${({ Mwidth }) => `${Mwidth}px`};
  height: ${({ height }) => "48px" || `${height}px`};
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: 24px;
  border: none;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  padding: 0;
`;

export default function Button({
  Mwidth,
  height,
  bgColor,
  color,
  text,
  action,
  disabled,
}) {
  return (
    <ButtonWrapper
      Mwidth={Mwidth}
      height={height}
      bgColor={bgColor}
      color={color}
      onClick={action}
      disabled={disabled}
    >
      {text}
    </ButtonWrapper>
  );
}
