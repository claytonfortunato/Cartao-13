import { useState } from "react";
import { Card } from "../../components/Card";
import { CardProps } from "../../@types/type";

import * as C from "./styles";

export const Home = () => {
  const [cardInfo, setCardInfo] = useState<CardProps>({
    name: "Seu nome",
    cvv: "123",
    number: "0000 0000 0000 0000",
  });

  return (
    <C.Container>
      <C.Wrapper>
        <Card
          number={cardInfo.number}
          name={cardInfo.name}
          cvv={cardInfo.cvv}
        />

        <C.WrapperInput></C.WrapperInput>
      </C.Wrapper>
    </C.Container>
  );
};
