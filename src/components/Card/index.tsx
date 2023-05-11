import Visa from "../../assets/visa.svg";
import Payment from "../../assets/ContactlessPayment.svg";
import Security from "../../assets/ShieldCheck.svg";
import backImg from "../../assets/back.png";

import { CardProps } from "../../@types/type";

import * as C from "./styles";

type PropsCard = {
  card: CardProps;
  callback: (card: CardProps) => void;
};

export const Card = ({ number, name, cvv }: CardProps) => {
  return (
    <C.CardContainer>
      <C.FrontCard>
        <C.TopInfo>
          <img src={Visa} alt="" />

          <img src={Payment} alt="" />
        </C.TopInfo>
        <C.NumberBox>{number}</C.NumberBox>
        <C.MidInfo>
          <span>{name}</span>
          <span>00/00</span>
        </C.MidInfo>
        <img src={backImg} alt="" />
      </C.FrontCard>

      <C.BackCard>
        <C.TopBar></C.TopBar>
        <C.NumberBack>
          <input type="text" value={cvv} />
          <span>CVV</span>
        </C.NumberBack>
      </C.BackCard>
    </C.CardContainer>
  );
};
