import { withTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";

interface Props {
  title?: string;
  content?: string;
  t?: any;
}
// Defina a animação de pulsação
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Estilos do botão com a animação de pulsação
const WhatsAppButtonWrapper = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 90px;
    height: 90px;
    animation: ${pulse} 2s infinite;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const WhatsIco = ({ title, content, t }: Props) => {
  return (
    <WhatsAppButtonWrapper
      href="https://wa.me/351927252945" 
      target="_blank"
      rel="noopener noreferrer"
    >
        <img className="img" src={require("./Zap.png" )} id=""/>
      
    </WhatsAppButtonWrapper>
  );
};

export default withTranslation()(WhatsIco);