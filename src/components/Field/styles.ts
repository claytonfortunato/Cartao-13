import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 398px;
    height: 48px;
    background: ${(props) => props.theme.gray900};
    border: 1.5px solid ${(props) => props.theme.gray700};
    border-radius: 4px;
    color: ${(props) => props.theme.gray400};
    outline: none;
    font-size: 16px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${(props) => props.theme.gray200};
`;
