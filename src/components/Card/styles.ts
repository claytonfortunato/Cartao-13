import styled from "styled-components";

import Card from "../../assets/credit_card_bg.svg";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-weight: bold;
`;

export const MidInfo = styled.div`
  font-size: 1.6rem;
  text-transform: uppercase;
`;
