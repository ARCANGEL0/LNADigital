import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  t: any;
}

const Block = ({ title, content, t }: Props) => {
  return (
    
    <a
        href="https://wa.me/1234567890" // Substitua pelo seu número de WhatsApp
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer">
      
      
      <img
        src="whatsapp-icon.png" // Substitua pelo caminho do ícone do WhatsApp
        alt="WhatsApp"
        width="50" // Ajuste o tamanho conforme necessário
        height="50"
      />
    </a>
  );
};

export default withTranslation()(Block);
