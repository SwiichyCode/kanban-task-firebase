import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .menu-label {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #828fa3;
  }

  .menu-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 16px;

    background: #ffffff;
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;

    span {
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      color: #000112;
    }
  }
`;

export const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px;
  gap: 8px;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: #828fa3;
  position: absolute;
  top: 70px;

  li {
    cursor: pointer;
  }
`;
