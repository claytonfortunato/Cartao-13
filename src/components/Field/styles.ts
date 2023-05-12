import styled from "styled-components";
import { FlipCard } from "../Card/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  input {
    width: 100%;
    height: 48px;
    background: ${(props) => props.theme.gray900};
    border: 1.5px solid ${(props) => props.theme.gray700};
    border-radius: 4px;
    color: ${(props) => props.theme.gray400};
    outline: none;
    font-size: 16px;

    &::placeholder {
      color: ${(props) => props.theme.gray400};
    }

    &:hover,
    &:focus-within {
      border-color: ${(props) => props.theme.purple900};

      ${FlipCard} {
        transform: rotateY(180deg);
      }
    }
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${(props) => props.theme.gray200};
  padding-right: 10px;

  img {
    padding-left: 6px;
  }
`;
