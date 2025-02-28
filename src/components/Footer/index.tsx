import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {useHistory} from 'react-router-dom';
import i18n from "i18next";
import { 
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

const history = useHistory();
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
    history.push(`?lng=`+language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon  className="" imgId="" src={src} width="45px" height="45px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
          
          </Row>
          <Row className="footerRow" justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:lnaassessoriadigital@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col className="socialCol 
            justify-content-center">
              <Title>{t("Social Links")}</Title>
                             &nbsp;&nbsp;
              <SocialLink
                href="https://api.whatsapp.com/send?phone=351927285125"
                src="whatsPT.svg"
              />
              
          &nbsp;&nbsp;&nbsp;
          
               <SocialLink
                href="https://www.facebook.com/profile.php?id=100082874455658"
                src="face.svg"
              />
               &nbsp;&nbsp;&nbsp;

              <SocialLink
                href="https://api.whatsapp.com/send?phone=5513988800596"
                src="whatsBR.svg"
              />
                            
                 <br/>
 &nbsp;&nbsp;

              <SocialLink
                href="https://instagram.com/lna_assessoriadigital"
                src="insta.svg"
              />

               &nbsp;&nbsp;&nbsp;

              <SocialLink
                href="mailto:lnaassessoriadigital@gmail.com"
                src="mail.png"
              />
       

            </Col>
            
            <Col sm={12} xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Label htmlFor="select-lang">{t("Language")}</Label>
  
  <LanguageSwitchContainer style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5px' }}>
    <LanguageSwitch onClick={() => handleChange("enus")}>
      <SvgIcon
        className=""
        imgId="footerUS"
        src="us.png"
        aria-label="homepage"
        width="30px"
        height="30px"
      />
    </LanguageSwitch>
    <LanguageSwitch onClick={() => handleChange("ptbr")}>
      <SvgIcon
        className=""
        imgId="footerBR"
        src="brazil.png"
        aria-label="homepage"
        width="30px"
        height="30px"
      />
    </LanguageSwitch>
    <LanguageSwitch onClick={() => handleChange("eses")}>
      <SvgIcon
        className=""
        imgId="footerES"
        src="spanish.png"
        aria-label="homepage"
        width="30px"
        height="30px"
      />
    </LanguageSwitch>
  </LanguageSwitchContainer>
</Col>

          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container 

        border={true}>
        

      <br/>
          <Row className="footerRow"       
   justify="space-between"
            align="middle"
                style={{ paddingTop:'5px', textAlign:'center',justifyContent:'space-evenly' }}
>
             <strong>{t('LNA Digital Agency')} @ <i style={{color:'rgb(30, 10, 10)'}}> {new Date().getFullYear()} </i> <br/>
               {t('All rights reserved')}</strong>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
