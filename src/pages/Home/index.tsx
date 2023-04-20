import { useState } from "react";
import { Card } from "../../components/Card";
import { CardProps } from "../../@types/type";

import * as C from "./styles";
import { Field } from "../../components/Field";

export const Home = () => {
  const [cardInfo, setCardInfo] = useState<CardProps>({
    name: "Seu nome",
    cvv: "123",
    number: "0000 0000 0000 0000",
  });

  const handleCardNumber = (number: string) => {
    setCardInfo((prev) => ({ ...prev, number: number }));
  };

  return (
    <C.Container>
      <C.Wrapper>
        <Card
          number={cardInfo.number}
          name={cardInfo.name}
          cvv={cardInfo.cvv}
        />

        <C.WrapperInput>
          <Field
            label="Número do Cartão"
            type="tel"
            currentValue={cardInfo.number}
            onFieldChanged={handleCardNumber}
          />
        </C.WrapperInput>
      </C.Wrapper>
    </C.Container>
  );
};
