import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 800px;
  width: 100%;
  background-color: ${(props) => props.theme.gray800};
  padding: 2.4rem;
  border-radius: 10px;

  @media (max-width: 782px) {
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 782px) {
    flex-direction: column;
  }

  background-color: ${(props) => props.theme.gray800};
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0;

  @media (max-width: 782px) {
    order: 1;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 16px;

  input {
    width: 100%;
    flex: none;
  }
`;

export const ContentCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 782px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
