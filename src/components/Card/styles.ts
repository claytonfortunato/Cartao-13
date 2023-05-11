import styled, { css } from "styled-components";

import Card from "../../assets/credit_card_bg.svg";

type Props = {
  flipped: boolean;
};

const sharedCard = css`
  background: url(${Card}) no-repeat center/cover;
  width: 280px;
  height: 168px;
  border-radius: 20px;
  border: 1px solid #333;
  transition: all 0.5s;
  backface-visibility: hidden;
  background-color: #333;
  transform-style: preserve-3d;
  color: #fff;
  border-radius: 16px;

  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  position: absolute;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;

  position: relative;
  perspective: 1000px;
`;

export const Wrapper = styled.div<Props>`
  ${sharedCard}

  padding: 1.6rem;
  z-index: ${(props) => (props.flipped ? 2 : 1)};
  transform: ${(props) => (props.flipped ? "rotate(0deg)" : "rotateY(180deg)")};

  .front.flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
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

  font-size: 18px;
  margin-top: 4rem;
  letter-spacing: 0.1rem;
`;

export const MidInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-top: 1rem;
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

export const BackCard = styled.div<Props>`
  ${sharedCard}

  z-index: ${(props) => (props.flipped ? 1 : 2)};
  transform: ${(props) =>
    props.flipped ? "rotateY(180deg)" : "rotate(360deg)"};
  position: absolute;
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
