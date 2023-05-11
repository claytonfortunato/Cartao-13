import Visa from "../../assets/visa.svg";
import Payment from "../../assets/ContactlessPayment.svg";

import { CardProps } from "../../@types/type";

import * as C from "./styles";

export const Card = ({ number, name, cvv }: CardProps) => {
  return (
    <C.CardContainer>
      <C.FlipCard>
        <C.FrontCard>
          <C.TopInfo>
            <img src={Visa} alt="" />

            <img src={Payment} alt="" />
          </C.TopInfo>
          <C.NumberBox>{number || "**** **** **** ****"}</C.NumberBox>

          <C.MidInfo>
            <span>{name || "Seu nome aqui"}</span>
            <span>**/**</span>
          </C.MidInfo>
        </C.FrontCard>

        <C.BackCard>
          <C.TopBar></C.TopBar>
          <C.NumberBack>
            <input type="text" value={cvv} />
            <span>CVV</span>
          </C.NumberBack>
        </C.BackCard>
      </C.FlipCard>
    </C.CardContainer>
  );
};
