import React from "react";

import DeleteBoard from "../DeleteBoard/index";
import ModalLayout from "..";
import { DeleteEditBoardWrapper } from "./style";

export default function DeleteEditBoard({
  openModal,
  handleClose,
  openDeleteModal,
  handleOpenDelete,
  handleCloseDelete,
}) {
  return (
    <ModalLayout
      open={openModal}
      onClose={handleClose}
      disableAutoFocus={true}
      top={"90px"}
      left={"initial"}
      right={"24px"}
      transform={"initial"}
      padding={"16px"}
    >
      <DeleteEditBoardWrapper>
        <button className="edit-board">Edit Board</button>

        <button onClick={handleOpenDelete} className="delete-board">
          Delete Board
        </button>
        <DeleteBoard
          openDeleteModal={openDeleteModal}
          handleCloseDelete={handleCloseDelete}
          handleClose={handleClose}
        />
      </DeleteEditBoardWrapper>
    </ModalLayout>
  );
}
