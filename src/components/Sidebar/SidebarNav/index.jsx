import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SidebarNavWrapper } from "./style";

import NewBoard from "../../Modal/NewBoard";

export default function SidebarNav({ documents }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SidebarNavWrapper>
      <ul className="nav">
        {documents &&
          documents.map(({ name, id }, index) => (
            <li key={index} className="nav-items">
              <Link to={`/${id}`}>
                <MdOutlineSpaceDashboard size={"1.5em"} className="btn-icon" />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        <li className="btn-newBoard" onClick={handleOpen}>
          <MdOutlineSpaceDashboard size={"1.5em"} className="btn-icon" />
          <span>+ Create New Board</span>
        </li>
        <NewBoard open={open} handleClose={handleClose} />
      </ul>
    </SidebarNavWrapper>
  );
}
