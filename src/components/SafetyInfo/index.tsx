import * as C from "./styles";

import Shieldicon from "../../assets/ShieldCheck.svg";

export const SafetyInfo = () => {
  return (
    <C.Container>
      <C.Image src={Shieldicon} alt="Ícone de segurança" />
      <span>Seus dados estão seguros</span>
    </C.Container>
  );
};
