import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { ContentBlockProps } from "../ContentBlock/types";
import { Fade } from "react-awesome-reveal";
import {
  IntroBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const IntroBlock = ({
  title,
  content,
  button,
  icon,
  t,
  imgId,
  width,
  height,
  rowClass,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <IntroBlockContainer id={id} >
      <Fade direction="right">
        <Row justify="space-between" align="middle" className={rowClass}>
          

             <Col lg={11} md={11} sm={12} xs={24}>
          {icon === ''  ?   '' : 
            <SvgIcon imgId={imgId} src={icon} width={width} height={height} />
          }
          </Col>

          <Col lg={11} md={11} sm={11} xs={24}>
                      <ContentWrapper>


              <h6 style={{fontSize: '1.75rem', color: '#edf2efff'}}>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("services")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>

                          </ContentWrapper>


                      </Col>


         
      
        </Row>

      </Fade>
    </IntroBlockContainer>
  );
};

export default withTranslation()(IntroBlock);
