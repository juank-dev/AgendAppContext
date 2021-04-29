import React, { Fragment } from "react";
import { useParams } from "react-router";
import { TaskTitle } from "../../components/Task/styles";
import {
  TaskDescription,
  TaskDueDate,
  TaskResponsable,
  TaskStatusLabel,
  TaskFooter,
} from "./styles";
import { getStatusById } from "../../constants/TaskStatus";

export const TaskDetail = () => {
  const { id } = useParams();

  const renderStatus = (id) => {
    const status = getStatusById(id);
    return (
      <TaskStatusLabel color={status.color}>{status.name}</TaskStatusLabel>
    );
  };
  return (
    <Fragment>
      {renderStatus(3)}
      <TaskTitle>Titulo</TaskTitle>
      <TaskDescription>Lorem ......</TaskDescription>
      <TaskFooter>
        <TaskDueDate>due date</TaskDueDate>
        <TaskResponsable>Responsable</TaskResponsable>
      </TaskFooter>
    </Fragment>
  );
};
