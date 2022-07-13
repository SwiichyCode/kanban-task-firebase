import React from "react";
import { TaskCardWrapper } from "./style";

export default function TaskCard({ task }) {
  return (
    <TaskCardWrapper>
      <h3 className="card-title">{task.title}</h3>
      <span className="substasks-counter">0 of 0 substasks</span>
    </TaskCardWrapper>
  );
}
