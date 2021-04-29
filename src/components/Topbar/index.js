import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useTitlePage } from "../../contexts/TitleContext";
import { TopbarContainer, TopbarTitle } from "./styles";

export const Topbar = ({ isBackVisible = true, onPress }) => {
  const { titleMenu } = useTitlePage();
  return (
    <TopbarContainer>
      {isBackVisible && (
        <div onClick={onPress}>
          <FaArrowLeft />
        </div>
      )}
      <TopbarTitle>
        <h4>{titleMenu}</h4>
      </TopbarTitle>
    </TopbarContainer>
  );
};
