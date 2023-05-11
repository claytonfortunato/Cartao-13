import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: #fff;

  span {
    margin-left: 12px;
  }

  @media (max-width: 782px) {
    margin-bottom: 40px;
    order: 1;
  }
`;

export const Image = styled.img``;
