import styled from "styled-components";
import { Modal } from "@mui/material";

export const SidebarNavWrapper = styled.nav`
  li {
    display: flex;
    align-items: center;
    max-width: 276px;
    height: 48px;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    border-radius: 0px 100px 100px 0px;
    color: #828fa3;
    cursor: pointer;
    transition: all 100ms ease-in;

    a {
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #828fa3;

      &:hover {
        color: #fff;
      }
    }
  }

  .nav-items:hover {
    background: #635fc7;
    color: #fff;
  }

  .btn-newBoard {
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #635fc7;
    cursor: pointer;
  }

  .btn-icon {
    padding-left: 32px;
    padding-right: 16px;
  }
`;
