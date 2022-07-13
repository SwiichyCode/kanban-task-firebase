import styled from "styled-components";

export const TaskCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px 16px;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  border-radius: 8px;
  gap: 8px;
  cursor: pointer;

  .card-title {
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #000112;
  }

  .substasks-counter {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #828fa3;
  }
`;
