import styled from "styled-components";
import { Modal } from "@mui/material";

export const NewBoardWrapper = styled(Modal)`
  height: auto;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #000112;
    padding-bottom: 24px;
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

  .addFields {
    background: rgba(99, 95, 199, 0.1);
    color: #635fc7;
  }
  .newBoard {
    background: #635fc7;
    color: #fff;
  }

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
`;

export const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  height: "auto",
  bgcolor: "#fff",
  borderRadius: "6px",
  boxSizing: "border-box",
  p: 4,
  fontFamily: "Plus Jakarta Sans, sans-serif",
};
