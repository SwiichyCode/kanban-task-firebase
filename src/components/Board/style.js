import styled from "styled-components";

export const BoardWrapper = styled.div`
  width: 100%;
  height: calc(100% - 97px);
  background: #f4f7fd;
  padding: 24px;
  box-sizing: border-box;

  .content-column {
    display: flex;

    .column {
      width: 100%;
      max-width: 280px;

      .column-name {
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #828fa3;
        text-transform: uppercase;
        padding-bottom: 24px;
      }
    }
  }
`;
