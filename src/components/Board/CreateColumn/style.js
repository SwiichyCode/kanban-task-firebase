import styled from "styled-components";

export const CreateColumnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: calc(100% - 24px);
  background: linear-gradient(
    180deg,
    #e9effa 0%,
    rgba(233, 239, 250, 0.5) 100%
  );
  border-radius: 6px;
  cursor: pointer;

  span {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #828fa3;
    text-transform: capitalize;
  }
`;
