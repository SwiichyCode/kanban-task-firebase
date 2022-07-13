import styled from "styled-components";
import { Modal } from "@mui/material";

export const DeleteBoardWrapper = styled(Modal)`
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #ea5555;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #828fa3;
  }

  .content-btn {
    width: 100%;
    display: flex;
    gap: 16px;
  }

  button {
    width: 100%;
    max-width: 200px;
    height: 40px;
    border-radius: 20px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 23px;
    text-align: center;
    padding: 0;
  }

  .delete-board {
    background: #ff9898;
    color: #fff;
  }
  .cancel {
    background: rgba(99, 95, 199, 0.25);
    color: #635fc7;
  }
`;

export const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
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
  gap: "24px",
};
