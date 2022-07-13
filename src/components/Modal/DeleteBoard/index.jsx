import React from "react";
import { Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useFirestore } from "../../../hooks/useFirestore";

import { DeleteBoardWrapper, style } from "./style";
import Button from "../../Button/Button";

export default function DeleteBoard({
  openDeleteModal,
  handleCloseDelete,
  handleClose,
}) {
  const { id } = useParams();
  let navigate = useNavigate();
  const { deleteDocument } = useFirestore("boards");

  const handleClick = async (e) => {
    await deleteDocument(id);
    handleClose();
    navigate("/");
  };

  return (
    <DeleteBoardWrapper
      open={openDeleteModal}
      onClose={handleCloseDelete}
      disableAutoFocus={true}
    >
      <Box sx={style}>
        <h3>Delete this board</h3>
        <p>
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>
        <div className="content-btn">
          <Button
            width={200}
            height={40}
            bgColor={"#EA5555"}
            color={"#fff"}
            text={"delete"}
            action={handleClick}
          />
          <Button
            width={200}
            height={40}
            bgColor={"rgba(99, 95, 199, 0.1)"}
            color={"#635FC7"}
            text={"cancel"}
            action={handleClose}
          />
        </div>
      </Box>
    </DeleteBoardWrapper>
  );
}
