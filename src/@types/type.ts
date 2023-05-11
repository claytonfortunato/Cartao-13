export interface CardProps {
  name: string;
  cvv: string;
  number: string;
  flipped: boolean;
}

export interface CardType {
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
}
