import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: relative;
  height: 100vh;
  /* min-width: 300px; */

  aside {
    height: 100%;
    background: #fff;
  }

  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    background: #fff;
    border-right: 1px solid #e4ebfa;
  }

  .btn-container {
    position: absolute;
    bottom: 0;
    right: -50px;
  }

  // Sidebar top
  .sidebar-top {
    .sidebar-logo {
      display: flex;
      align-items: center;
      height: 97px;

      img {
        padding-left: 34px;
      }
    }

    .sidebar-nav {
      h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #828fa3;
        text-transform: uppercase;
        padding-left: 32px;
        padding-top: 15px;
        padding-bottom: 19px;
      }
    }
  }

  .sidebar-bot {
    padding-bottom: 32px;

    .sidebar-theme {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 251px;
      height: 48px;
      background: #f4f7fd;
      border-radius: 4px;
      margin-left: 24px;
      box-sizing: border-box;
      gap: 3px;
      margin-bottom: 8px;

      label {
        margin: 0;
      }

      .switch-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .sidebar-show {
      display: flex;
      align-items: center;
      height: 48px;
      cursor: pointer;

      img {
        padding-left: 31px;
        padding-right: 15px;
      }

      h2 {
        font-weight: 700;
        font-size: 15px;
        line-height: 19px;
        color: #828fa3;
      }
    }
  }
`;
