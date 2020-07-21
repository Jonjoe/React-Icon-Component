import React from "react";
import styled from "styled-components";

import Icon from "./";

const IconSet: React.FC = (): JSX.Element => {
  return (
    <StyledContainer>
      <Icon name="chevron-down" />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;

  > * {
    margin: 10px;
  }
`;

export default IconSet;
