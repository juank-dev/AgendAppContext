import styled from "styled-components";

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem 1rem;

  progress {
    width: 100%;
  }

  & .footerCard {
    display: flex;
  }
  & .footerCard p {
    padding: 0 1rem;
  }
`;
