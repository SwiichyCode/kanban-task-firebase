import React from "react";
import styled from "styled-components";

export default function TextArea({ labelOn, labelText }) {
  return (
    <TextAreaContainer>
      {labelOn ? <LabelWrapper>{labelText}</LabelWrapper> : null}
      <TextAreaWrapper />
    </TextAreaContainer>
  );
}

const TextAreaContainer = styled.div`
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
const TextAreaWrapper = styled.textarea`
  width: 100%;
  height: 112px;
  padding: 0;
  background: #ffffff;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;
  resize: none;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: #828fa3;
  padding: 8px 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;
