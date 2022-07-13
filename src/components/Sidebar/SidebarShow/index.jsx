import React from "react";
import { SidebarShowWrapper } from "./style";
import ShowIcon from "../../../assets/icon-show-sidebar.svg";
export default function SidebarShow({ cycleOpen }) {
  return (
    <SidebarShowWrapper onClick={cycleOpen}>
      <img src={ShowIcon} alt="" />
    </SidebarShowWrapper>
  );
}
