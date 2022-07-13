import styled from "styled-components";

export const NewTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  gap: 24px;

  .input {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .content-input {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #828fa3;
    }
  }

  input {
    width: 100%;
    height: 40px;
    font-family: "Plus Jakarta Sans", sans-serif;
    background: #ffffff;
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    padding-left: 1em;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #000112;

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
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border: none;
    font-weight: 700;
    font-size: 13px;
    line-height: 23px;
    font-family: "Plus Jakarta Sans", sans-serif;
    cursor: pointer;
  }
`;
