import styled from "styled-components";

export const TaskStatusLabel = styled.p`
  color: ${(props) => props.color || "#222222"};
  font-size: 0.88rem;
  font-weight: bold;
`;

export const TaskTitle = styled.h3`
  color: #333333;
  font-size: 1.3rem;
  font-weight: 400;
`;

export const TaskDescription = styled.p`
  color: #666666;
  font-size: 1rem;
  font-weight: 300;
`;

export const TaskDueDate = styled.p`
  color: #666666;
  font-size: 0.88rem;
  font-weight: 400;
`;

export const TaskResponsable = styled.p`
  color: #666666;
  font-size: 1.1rem;
  font-weight: 400;
`;

export const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
