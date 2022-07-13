import React from "react";
import Button from "../../Button/Button";
import { EmptyBoardWrapper } from "./style";

export default function EmptyBoard({ id, documents }) {
  return (
    <EmptyBoardWrapper>
      {id ? (
        <>
          <p>This board is empty. Create a new column to get started.</p>
          <Button
            Mwidth={174}
            bgColor={"#635FC7"}
            color={"#fff"}
            text={"+ add new column"}
          />
        </>
      ) : documents && documents.length > 0 ? (
        <p>Navigate</p>
      ) : (
        <p>Create</p>
      )}
    </EmptyBoardWrapper>
  );
}
