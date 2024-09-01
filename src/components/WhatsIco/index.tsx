import { withTranslation } from "react-i18next";
import styled from "styled-components";

interface Props {
  title?: string;
  content?: string;
  t?: any;
}

// Estilos usando styled-components
const WhatsAppButtonWrapper = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;

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
      <img
        src="../../../public/img/icons/Zap.png" // Substitua pelo caminho correto do ícone do WhatsApp
        alt="WhatsApp"
      />
    </WhatsAppButtonWrapper>
  );
};

export default withTranslation()(WhatsIco);