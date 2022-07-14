import React, { useRef, useState } from "react";
import { DropdownMenu, DropdownWrapper } from "./style";
import ChevronDown from "../../assets/icon-chevron-down.svg";

export default function Dropdown({ document }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState(null);
  const handleClick = () => setIsActive(!isActive);

  console.log(status);
  return (
    <DropdownWrapper>
      <span className="menu-label">Status</span>
      <div className="menu-trigger" onClick={handleClick}>
        <span>Todo</span>
        <img src={ChevronDown} alt="" />
      </div>
      <DropdownMenu ref={dropdownRef} isActive={isActive}>
        {document.columns.map((status, index) => (
          <li key={index}>
            <option
              value={status.name}
              onClick={(e) => setStatus(e.target.value)}
            >
              {status.name}
            </option>
          </li>
        ))}
      </DropdownMenu>
    </DropdownWrapper>
  );
}
