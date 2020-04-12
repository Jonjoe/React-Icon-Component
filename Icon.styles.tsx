import styled from "styled-components";

interface ContainerProps {
  size?: string;
}

export const Container = styled.div`
  font-size: ${(props: ContainerProps): string =>
    props.size ? props.size : `1rem`};
`;

export const IconSet = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    margin: 10px;
  }
`;
