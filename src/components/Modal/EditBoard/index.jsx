import React from "react";
import ModalLayout from "..";
import { EditBoardWrapper } from "./style";

export default function EditBoard({ openModal, handleClose }) {
  return (
    <ModalLayout
      open={openModal}
      onClose={handleClose}
      disableAutoFocus={true}
      padding={"32px"}
      title={"edit board"}
      titleOn={true}
    >
      <EditBoardWrapper></EditBoardWrapper>
    </ModalLayout>
  );
}
