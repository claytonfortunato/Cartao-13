import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
  gap: 8px;
  background: ${(props) => props.theme.purple600};
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  margin-top: 4rem;
  color: ${(props) => props.theme.gray200};
  font-size: 16px;

  transition: all ease-in 0.3s;

  &:hover {
    background: ${(props) => props.theme.purple400};
    color: ${(props) => props.theme.black};
  }
`;
