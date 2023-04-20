import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.gray800};
  padding: 3.2rem;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  background-color: ${(props) => props.theme.gray800};
`;

export const WrapperInput = styled.div`
  width: 398px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 0;

  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const BoxInput = styled.div`
  display: flex;
  flex: none;
  order: 2;
  flex-grow: 0;
  align-self: stretch;
  gap: 16px;

  input {
    width: 100%;
    flex: none;
  }
`;
