import styled from "styled-components";

export const DeleteEditBoardWrapper = styled.div`
  width: 192px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;

  button {
    text-align: start;
    border: none;
    background: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    font-family: Plus Jakarta Sans, sans-serif;
    cursor: pointer;
    padding: 0;
  }

  .edit-board {
    color: #828fa3;
  }
  .delete-board {
    color: #ea5555;
  }
`;
