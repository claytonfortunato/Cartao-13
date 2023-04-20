import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 3.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 10px;

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
