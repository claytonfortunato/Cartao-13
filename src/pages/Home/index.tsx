import { useState } from "react";
import { Card } from "../../components/Card";
import { CardProps } from "../../@types/type";

import * as C from "./styles";
import { Field } from "../../components/Field";
import { Button } from "../../components/Button";

export const Home = () => {
  const [cardInfo, setCardInfo] = useState<CardProps>({
    name: "Seu nome",
    cvv: "123",
    number: "0000 0000 0000 0000",
  });

  const handleCardNumber = (number: string) => {
    setCardInfo((prev) => ({ ...prev, number: number }));
  };

  const handleName = (name: string) => {
    setCardInfo((prev) => ({ ...prev, name: name }));
  };

  const handleSegurity = (cvv: string) => {
    setCardInfo((prev) => ({ ...prev, cvv: cvv }));
  };

  return (
    <C.Container>
      <C.Wrapper>
        <C.WrapperInput>
          <Field
            label="Número do Cartão"
            type="tel"
            currentValue={cardInfo.number}
            onFieldChanged={handleCardNumber}
          />

          <Field
            label="Nome do titular"
            type="text"
            currentValue={cardInfo.name}
            onFieldChanged={handleName}
          />

          <C.BoxInput>
            <Field label="Validade" type="date" />
            <Field
              label="CVV"
              type="password"
              currentValue={cardInfo.cvv}
              onFieldChanged={handleSegurity}
            />
          </C.BoxInput>
        </C.WrapperInput>

        <Card
          number={cardInfo.number}
          name={cardInfo.name}
          cvv={cardInfo.cvv}
        />
      </C.Wrapper>
      <Button />
    </C.Container>
  );
};
