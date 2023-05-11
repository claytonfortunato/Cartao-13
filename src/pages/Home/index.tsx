import { useState } from "react";
import { Card } from "../../components/Card";
import { CardProps, CardType } from "../../@types/type";

import * as C from "./styles";
import { Field } from "../../components/Field";
import { Button } from "../../components/Button";
import help from "../../assets/help.svg";
import { SafetyInfo } from "../../components/SafetyInfo";

export const Home = () => {
  const [cards, setCards] = useState<CardType[]>();

  const [cardInfo, setCardInfo] = useState<CardProps>({
    name: "",
    cvv: "123",
    number: "",
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

  const handleCardClick = (currentClickedCard: CardType) => {
    setCards((prev) =>
      prev?.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );
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
            <Field label="Validade" type="tel" placeholder="MM/AA" />
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
            callback={handleCardClick}
          />

          <SafetyInfo />
        </C.ContentCard>
      </C.Content>
      <Button />
    </C.Container>
  );
};
