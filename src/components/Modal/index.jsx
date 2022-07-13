import React from "react";
import { Modal, Box } from "@mui/material";
import styled from "styled-components";

export default function ModalLayout({
  children,
  title,
  titleOn,
  open,
  onClose,
  height,
  padding,
  top,
  right,
  bottom,
  left,
  transform,
}) {
  const style = {
    position: "absolute",
    top: top || "50%",
    left: left || "50%",
    right: right || null,
    bottom: bottom || null,
    transform: transform || "translate(-50%, -50%)",
    width: "auto",
    height: height || "auto",
    bgcolor: "#fff",
    borderRadius: "6px",
    boxSizing: "border-box",
    p: padding,
    fontFamily: "Plus Jakarta Sans, sans-serif",
  };
  return (
    <ModalWrapper open={open} onClose={onClose} disableAutoFocus={true}>
      <Box sx={style}>
        {titleOn ? <h3 className="modal-title">{title}</h3> : null}
        {children}
      </Box>
    </ModalWrapper>
  );
}

const ModalWrapper = styled(Modal)`
  .modal-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #000112;
    text-transform: capitalize;
    padding-bottom: 24px;
  }
`;
