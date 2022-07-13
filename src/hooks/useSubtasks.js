import React, { useState } from "react";

export const useSubtasks = () => {
  const [columns, setColumns] = useState([]);

  const handleChange = (i, e) => {
    let newFormValues = [...columns];
    newFormValues[i][e.target.name] = e.target.value;
    setColumns(newFormValues);
  };

  let addFormFields = () => {
    setColumns([
      ...columns,
      {
        task: [
          {
            title: "",
            description: "",
            status: "",
            subtasks: [{ title: "", isCompleted: true }],
          },
        ],
      },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...columns];
    newFormValues.splice(i, 1);
    setColumns(newFormValues);
  };

  return { columns, handleChange, addFormFields, removeFormFields };
};
