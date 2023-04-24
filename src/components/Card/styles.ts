import styled, { css } from "styled-components";

import Card from "../../assets/credit_card_bg.svg";

type Props = {
  flipped: boolean;
};

const sharedStyles = css`
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 150px;
  border-radius: 20px;
  border: 1px solid #333;
  transition: all 0.5s;
  backface-visibility: hidden;
  background-color: #333;
  transform-style: preserve-3d;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div<Props>`
  width: 280px;
  height: 168px;
  background: url(${Card}) no-repeat center/cover;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  flex: none;
  order: 0;
  flex-grow: 0;

  border-radius: 16px;
  padding: 1.6rem;
  color: #fff;
  margin-bottom: 3.2rem;

  position: relative;
  perspective: 1000px;
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
