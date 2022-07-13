import React, { useState } from "react";
import { Box } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { MdClose } from "react-icons/md";

import { useFirestore } from "../../../hooks/useFirestore";
import { NewBoardWrapper, style } from "./style";
import Input from "../../Input/Input";
import { useSubtasks } from "../../../hooks/useSubtasks";

export default function NewBoard({ handleClose, open }) {
  const [name, setName] = useState();
  const { addDocument } = useFirestore("boards");
  const { columns, handleChange, addFormFields, removeFormFields } =
    useSubtasks();

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (columns.length === 0) {
      await addDocument({
        name,
        columns: [],
      });
    } else {
      await addDocument({
        name,
        columns,
      });
    }
    handleClose();
  };

  return (
    <NewBoardWrapper
      open={open}
      onClose={handleClose}
      disableAutoFocus={true}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <h3>Add New Board</h3>
          <form className="input-wrapper" onSubmit={handleSubmit}>
            <Input
              labelOn={true}
              labelText={"board name"}
              placeholder={"e.g. Web Design"}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="content-input">
              <label for="name">Columns</label>
              {columns.map((item, index) => (
                <div className="input" key={index}>
                  <input
                    placeholder="test"
                    name="name"
                    value={item.name || ""}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <MdClose
                    color="#828FA3"
                    size={"1.5em"}
                    onClick={() => removeFormFields(index)}
                  />
                </div>
              ))}
            </div>
            <button type="button" onClick={addFormFields} className="addFields">
              + Add fields
            </button>
            <button type="submit" onClick={handleSubmit} className="newBoard">
              Create new board
            </button>
          </form>
        </Box>
      </Fade>
    </NewBoardWrapper>
  );
}
