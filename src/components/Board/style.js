import styled from "styled-components";

export const BoardWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: calc(100% - 97px);
  background: #f4f7fd;
  padding: 24px;
  box-sizing: border-box;
  gap: 24px;

  .content-column {
    display: flex;
    height: 100%;
    align-items: flex-end;

    .column {
      width: 280px;
      height: 100%;

      .column-name {
        display: flex;
        align-items: center;
        padding-bottom: 24px;
        gap: 12px;

        h3 {
          font-weight: 700;
          font-size: 12px;
          line-height: 15px;
          letter-spacing: 2.4px;
          color: #828fa3;
          text-transform: uppercase;
        }
      }
    }

    .dot {
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: ${({ randomColor }) => `#${randomColor()}`};
    }
  }
`;

export const DotWrapper = styled.siv`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${({ randomColor }) => `#${randomColor()}`};
`;
