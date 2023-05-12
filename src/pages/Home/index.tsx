import { useState } from "react";
import { Card } from "../../components/Card";
import { CardProps } from "../../@types/type";

import * as C from "./styles";
import { Field } from "../../components/Field";
import { Button } from "../../components/Button";
import help from "../../assets/help.svg";
import { SafetyInfo } from "../../components/SafetyInfo";

export const Home = () => {
  const [cardInfo, setCardInfo] = useState<CardProps>({
    name: "",
    cvv: "***",
    number: "",
    validate: "",
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

  const handleValidate = (validate: string) => {
    setCardInfo((prev) => ({ ...prev, validate: validate }));
  };

  return (
    <C.Container>
      <C.Content>
        <C.WrapperInput>
          <Field
            label="Número do Cartão"
            type="tel"
            currentValue={cardInfo.number}
            onFieldChanged={handleCardNumber}
            placeholder="Digite o número do cartão"
          />

          <Field
            label="Nome do titular"
            type="text"
            currentValue={cardInfo.name}
            onFieldChanged={handleName}
            placeholder="Nome como está no cartão"
          />

          <C.BoxInput>
            <Field
              label="Validade"
              type="tel"
              placeholder="mm/aa"
              currentValue={cardInfo.validate}
              onFieldChanged={handleValidate}
            />
            <Field
              help={help}
              label="CVV"
              type="tel"
              currentValue={cardInfo.cvv}
              onFieldChanged={handleSegurity}
            />
          </C.BoxInput>
        </C.WrapperInput>

        <C.ContentCard>
          <Card
            number={cardInfo.number}
            name={cardInfo.name}
            cvv={cardInfo.cvv}
            validate={cardInfo.validate}
          />

          <SafetyInfo />
        </C.ContentCard>
      </C.Content>
      <Button />
    </C.Container>
  );
};
