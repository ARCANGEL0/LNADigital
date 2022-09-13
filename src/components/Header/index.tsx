import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import i18n from "i18next";
import {useHistory} from 'react-router-dom';
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
    LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };
const history = useHistory();
  const MenuItem = () => {
     const handleChange = (language: string) => {
    i18n.changeLanguage(language);
history.push(`?lng=`+language);

  };

    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About us")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("services")}>
          <Span>{t("Services")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("gallery")}>
          <Span>{t("Portfolio")}</Span>
        </CustomNavLinkSmall>
      
          <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>

            <CustomNavLinkSmall>
          <Span>
            
 <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("enus")}>
                  <SvgIcon
                   className=""
                  imgId="headerUS"
                    src="us.png"
                    aria-label="homepage"
                    width="20px"
                    height="20px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("ptbr")}>
                  <SvgIcon
                   className=""
                  imgId="headerBR"
                    src="brazil.png"
                    aria-label="homepage"
                    width="22px"
                    height="22px"
                  />
                </LanguageSwitch>

                   <LanguageSwitch onClick={() => handleChange("eses")}>
                  <SvgIcon
                   className=""
                  imgId="headerES"
                    src="spanish.png"
                    aria-label="homepage"
                    width="22px"
                    height="22px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>

          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon

             className=""
              src="logo.png"
                  width="240px"
                  height="94px"
                  imgId=""
                  />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
