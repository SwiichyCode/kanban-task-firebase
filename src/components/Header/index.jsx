import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DeleteEditBoard from "../Modal/DeleteEditBoard";

import LogoDark from "../../assets/logo-dark.svg";
import IconEllipsis from "../../assets/icon-vertical-ellipsis.svg";
import { HeaderWrapper } from "./style";
import { headerVariants } from "./motion";
import Button from "../Button/Button";
import NewTask from "../Modal/NewTask";

export default function Header({ open, documents }) {
  // Define state for individual modal
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openModalTask, setOpenModalTask] = useState(false);

  // Handle Modal/DeleteEditBoard
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    setOpenDeleteModal(false);
  };

  // Handle Modal/DeleteBoard
  const handleOpenDelete = () => setOpenDeleteModal(true);
  const handleCloseDelete = () => setOpenDeleteModal(false);

  // Handle ModalTask
  const handleOpenTask = () => setOpenModalTask(true);
  const handleCloseTask = () => setOpenModalTask(false);

  return (
    <AnimatePresence>
      <HeaderWrapper>
        <div className="left-side">
          {!open ? (
            <motion.div
              className="header-logo"
              initial={{ width: 0, height: null }}
              animate={{
                width: 209,
                height: null,
              }}
              exit={{
                width: 0,
                transition: { delay: 2, duration: 0.3 },
              }}
            >
              <motion.img
                variants={headerVariants}
                animate="open"
                exit="closed"
                src={LogoDark}
                alt=""
              />
            </motion.div>
          ) : null}
          <h1>Platform Launch</h1>
        </div>

        <div className="right-side">
          <Button
            Mwidth={164}
            bgColor={"#635FC7"}
            color={"#fff"}
            text="+ add new task"
            action={handleOpenTask}
          />

          <NewTask
            openModalTask={openModalTask}
            handleCloseTask={handleCloseTask}
          />

          {documents && documents.length > 0 ? (
            <img onClick={handleOpen} src={IconEllipsis} alt="" />
          ) : null}

          <DeleteEditBoard
            openModal={openModal}
            handleClose={handleClose}
            openDeleteModal={openDeleteModal}
            handleOpenDelete={handleOpenDelete}
            handleCloseDelete={handleCloseDelete}
          />
        </div>
      </HeaderWrapper>
    </AnimatePresence>
  );
}
