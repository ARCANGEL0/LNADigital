import { Row, Col, Card,  } from "antd";
import { withTranslation } from "react-i18next";
import {ImSearch} from 'react-icons/im';
import {IoShareSocialSharp, IoRocket} from 'react-icons/io5';
import { GiStarsStack} from 'react-icons/gi';
import {AiTwotoneNotification} from 'react-icons/ai';
import {FaLaptopCode, FaRegLightbulb} from 'react-icons/fa';
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
  id: string;
}

const MiddleBlock = ({ title, content, button,id, t }: MiddleBlockProps) => {


  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });

  };
  
  return (
    <MiddleBlockSection  id={id} >
      <Slide direction="down">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>&nbsp;{t(title)}</h6>
              <Content>
  <Row gutter={16}>
      <Col span={4}>
        <Card className="serviceCard" cover={ <> 
                    <br/>


      <ImSearch className="cardIcon"/>
      </>
    } title="Otimização De Sites - SEO " hoverable={true} bordered={true}>
     Conteudo
        </Card>
      </Col>
                  <Col span={3}></Col>
      <Col  span={4}>
        <Card  cover={ <> 
                    <br/>

      <FaRegLightbulb className="cardIcon"/>
      </>
    } 
      className="serviceCard" title="Marketing digital" hoverable={true} bordered={true}>
Conteudo

        </Card>
      </Col>
                  <Col span={3}></Col>

      <Col  span={4}>
        <Card  cover={ <> 
                    <br/>

      <FaLaptopCode className="cardIcon"/>
      </>
    } 
      className="serviceCard" title="Criação de sites" hoverable={true} bordered={true}>
  Conteudo
        </Card>
      </Col>
    </Row>
<br/>
<br/>
      <Row gutter={16}>
      <Col span={4}>
        <Card  cover={ <> 
                    <br/>

      <AiTwotoneNotification className="cardIcon"/>
      </>
    } 
      className="serviceCard" title="Redes sociais" hoverable={true} bordered={true}>
    Conteudo
        </Card>
      </Col>
                        <Col span={3}></Col>


      <Col span={4}>
        <Card  cover={ <> 
                    <br/>

      <GiStarsStack className="cardIcon"/>
      </>
    } 
      className="serviceCard" title="Identidade visual" hoverable={true} bordered={true}>
          Conteudo
        </Card>
      </Col>
         <Col span={3}></Col>
      <Col span={4}>
        <Card  cover={ <> 
                    <br/>

      <IoRocket className="cardIcon"/>
      </>
    } 
      className="serviceCard" title="Gestão de tráfego" hoverable={true} bordered={true}>
     Conteudo
        </Card>
      </Col>
    </Row>



              </Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("contact")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
