import React from "react";
import ModalLayout from "..";
import Input from "../../Input/Input";
import TextArea from "../../TextArea";
import { NewTaskWrapper } from "./style";
import { useSubtasks } from "../../../hooks/useSubtasks";
import { MdClose } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Dropdown from "../../Dropdown/Dropdown";

export default function NewTask({ openModalTask, handleCloseTask }) {
  const { id } = useParams();
  const { document } = useDocument("boards", id);
  const { columns, handleChange, addFormFields, removeFormFields } =
    useSubtasks();

  return (
    <>
      {document ? (
        <ModalLayout
          open={openModalTask}
          onClose={handleCloseTask}
          disableAutoFocus={true}
          title="add new task"
          titleOn={"true"}
          padding={"32px"}
        >
          <NewTaskWrapper>
            <Input
              labelOn={true}
              labelText={"title"}
              placeholder={"e.g. Take coffee break"}
            />
            <TextArea labelOn={true} labelText={"description"} />
            <div className="content-input">
              <label for="name">Subtasks</label>
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
            <Dropdown document={document} />
          </NewTaskWrapper>
        </ModalLayout>
      ) : null}
    </>
  );
}
