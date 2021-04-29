import { Fragment } from "react";
import { ItemWrapper } from "./styles";

export const Task = ({ title, numberTask, tipeTask, duration }) => {
  return (
    <ItemWrapper>
      <h3>{title}</h3>
      <p>{numberTask} Task</p>
      <progress value="70" max="100">
        70 %
      </progress>
      <div className="footerCard">
        <p>{tipeTask}</p>
        <p>{duration} Days Left</p>
      </div>
    </ItemWrapper>
  );
};
