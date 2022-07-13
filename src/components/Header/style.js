import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 97px;
  border-bottom: 1px solid #e4ebfa;
  box-sizing: border-box;

  .left-side {
    display: flex;
    align-items: center;
    height: 100%;

    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      color: #000112;
      padding-left: 32px;
    }

    .header-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      border-right: 1px solid #e4ebfa;
    }
  }

  .right-side {
    width: 100%;
    max-width: 192px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 32px;

    img {
      cursor: pointer;
    }
  }
`;
