import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 1rem;
  width: 806px;
  height: 100%;
  display: flex;

  background-color: ${(props) => props.theme.gray800};
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
`;
