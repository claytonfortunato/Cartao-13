import Visa from "../../assets/visa.svg";
import Payment from "../../assets/ContactlessPayment.svg";
import Security from "../../assets/ShieldCheck.svg";

import { CardProps } from "../../@types/type";

import * as C from "./styles";

export const Card = ({ number, name, cvv }: CardProps) => {
  return (
    <C.CardContainer>
      <C.Wrapper>
        <C.TopInfo>
          <img src={Visa} alt="" />

          <img src={Payment} alt="" />
        </C.TopInfo>
        <C.NumberBox>{number}</C.NumberBox>
        <C.MidInfo>
          <span>{name}</span>
          <span>00/00</span>
        </C.MidInfo>
      </C.Wrapper>
      <C.SafeInfo>
        <img src={Security} alt="" />

        <span>Seus dados estão seguros</span>
      </C.SafeInfo>
    </C.CardContainer>
  );
};
