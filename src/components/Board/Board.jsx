import React from "react";
import { useParams } from "react-router-dom";

import { useDocument } from "../../hooks/useDocument";
import EmptyBoard from "./EmptyBoard";

import { BoardWrapper, DotWrapper } from "./style";
import TaskCard from "../CardTask";
import CreateColumn from "./CreateColumn";
export default function Board({ documents }) {
  const { id } = useParams();
  const { document } = useDocument("boards", id);

  const randomColor = () => {
    const color = (Math.random() * 0xfffff * 1000000).toString(16);
    return color.slice(0, 6);
  };

  return (
    <>
      <BoardWrapper>
        {document && document.columns ? (
          <ul className="content-column">
            {document &&
              document.columns.map((item) => (
                <li className="column">
                  <div className="column-name">
                    <DotWrapper randomColor={randomColor} />
                    <h3>
                      {item.name} ({item.task.length})
                    </h3>
                  </div>

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
