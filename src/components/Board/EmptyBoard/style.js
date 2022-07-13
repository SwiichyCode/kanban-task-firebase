import styled from "styled-components";

export const EmptyBoardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 97px);
  gap: 32px;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #828fa3;
  }

  button {
    width: 100%;
    max-width: 174px;
    height: 48px;
    border: none;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #ffffff;
    background: #635fc7;
    border-radius: 24px;
    font-family: "Plus Jakarta Sans", sans-serif;
    cursor: pointer;
  }
`;
