import React, { useState } from "react";
import { CreateBoardWrapper } from "./style";
import Button from "../../Button/Button";
import NewBoard from "../../Modal/NewBoard";

export default function CreateBoard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <CreateBoardWrapper>
      <p>This app is empty. Create a new board to get started.</p>
      <Button
        Mwidth={174}
        bgColor={"#635FC7"}
        color={"#fff"}
        text={"+ add new board"}
        action={handleOpen}
      />
      <NewBoard open={open} handleClose={handleClose} />
    </CreateBoardWrapper>
  );
}
