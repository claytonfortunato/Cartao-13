import styled from "styled-components";

import Card from "../../assets/credit_card_bg.svg";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3.6rem;
`;

export const Wrapper = styled.div`
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
  gap: 8px;
  span {
    font-size: 16px;
    color: ${(props) => props.theme.gray200};
  }
`;
