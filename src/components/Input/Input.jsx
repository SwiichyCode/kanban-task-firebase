import React from "react";
import styled from "styled-components";

export default function Input({
  labelOn,
  labelText,
  inputWidth,
  inputHeight,
  placeholder,
  maxWidth,
  onChange,
  value,
  type,
}) {
  const inputRef = React.useRef(null);

  return (
    <InputContainer>
      {labelOn ? <LabelWrapper>{labelText}</LabelWrapper> : null}
      <InputWrapper
        type={type}
        maxWidth={maxWidth}
        placeholder={placeholder}
        inputWidth={inputWidth}
        inputHeight={inputHeight}
        onChange={onChange}
        value={value}
        ref={inputRef}
      />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const LabelWrapper = styled.label`
  text-transform: capitalize;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #828fa3;
  padding-bottom: 8px;
`;
const InputWrapper = styled.input`
  width: ${({ inputWidth }) => "100%" || `${inputWidth}`};
  height: ${({ inputHeight }) => (inputHeight ? `${inputHeight}px` : "40px")};
  max-width: ${({ maxWidth }) => `${maxWidth}`};
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  background: #ffffff;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;
  color: #000112;
  padding: 0 0 0 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    margin-left: 16px;
    font-size: 13px;
    line-height: 23px;
    color: #000112;
    mix-blend-mode: normal;
    font-family: "Plus Jakarta Sans", sans-serif;
  }
`;
