import styled, { css } from "styled-components";

import Card from "../../assets/credit_card_bg.svg";

const sharedCard = css`
  background: url(${Card}) no-repeat center/cover;
  position: absolute;
  width: 280px;
  height: 168px;
  border-radius: 20px;
  border: 1px solid #333;
  transition: all 0.5s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #333;

  color: #fff;
  border-radius: 16px;

  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
`;

export const FlipCard = styled.div`
  background-color: transparent;
  height: 200px;

  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
`;

export const CardContainer = styled.div`
  perspective: 1000px;
  cursor: pointer;

  ${FlipCard}:hover {
    transform: rotateY(180deg);
  }

  @media (max-width: 782px) {
    align-items: center;
  }
`;

export const FrontCard = styled.div`
  ${sharedCard}

  padding: 1.6rem;
`;

export const BackCard = styled.div`
  ${sharedCard}

  transform: rotateY(180deg);
`;

export const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 176px;
`;

export const NumberBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 16px;

  font-size: 16px;
  margin-top: 4rem;
  letter-spacing: 0.1rem;
  font-weight: 100;
`;

export const MidInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-top: 1rem;
  font-weight: 100;
`;

export const SafeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  gap: 8px;
  span {
    font-size: 16px;
    color: ${(props) => props.theme.gray200};
  }
`;

export const NumberBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  input {
    background: ${(props) => props.theme.gray300};
    padding: 6px;
    border-radius: 4px;
    border: none;
    outline: none;
    text-align: right;
    width: 70%;
  }

  span {
    font-size: 14px;
    font-weight: 100;
    margin-left: 8px;
  }
`;

export const TopBar = styled.div`
  background-color: ${(props) => props.theme.gray900};
  width: 100%;
  height: 30px;
  margin-top: 20px;
`;
