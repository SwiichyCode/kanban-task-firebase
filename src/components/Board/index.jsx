import React from "react";
import { useParams } from "react-router-dom";

import { useDocument } from "../../hooks/useDocument";
import EmptyBoard from "./EmptyBoard";

import { BoardWrapper } from "./style";
import TaskCard from "../CardTask";
import CreateColumn from "./CreateColumn";
export default function Board({ documents }) {
  const { id } = useParams();
  const { document } = useDocument("boards", id);

  return (
    <>
      <BoardWrapper>
        {document && document.columns ? (
          <ul className="content-column">
            {document &&
              document.columns.map((item) => (
                <li className="column">
                  <h3 className="column-name">{item.name}</h3>

                  {item.task.map((task) => (
                    <TaskCard task={task} />
                  ))}
                </li>
              ))}
            <CreateColumn />
          </ul>
        ) : (
          <EmptyBoard id={id} documents={documents} />
        )}
      </BoardWrapper>
    </>
  );
}
