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
  servone: any;
  servtwo: any;
  servthree: any;
  servfour: any;
  servfive: any;
  servsix: any;

}
const MiddleBlock = ({ title, content, button,id, t, servone, servtwo, servthree, servfour,servfive,servsix }: MiddleBlockProps) => {


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
  <Row className="servicesRow" gutter={12}>
      <Col span={4}>
        <Card className="serviceCard" cover={ <> 
                    <br/>


      <ImSearch className="cardIcon"/>
      </>
    } title={t("Website Optimization - SEO")} hoverable={true} bordered={true}>
            {t(servone)}

        </Card>
      </Col>
                  <Col span={6}></Col>
      <Col  span={4}>
        <Card  cover={ <> 
                    <br/>

      <FaRegLightbulb className="cardIcon"/>
      </>
    } 
      className="serviceCard" title={t("Digital marketing")} hoverable={true} bordered={true}>
                   {t(servtwo)}

        </Card>
      </Col>
                  <Col span={6}></Col>

     
    </Row>
<br/>
<br/>
      <Row className="servicesRow" gutter={12}>
      <Col span={4}>
        <Card  cover={ <> 
                    <br/>

      <AiTwotoneNotification className="cardIcon"/>
      </>
    } 
      className="serviceCard" title={t("Social networks")} hoverable={true} bordered={true}>
              {t(servthree)}

        </Card>
      </Col>
                        <Col span={6}></Col>


      <Col span={4}>
        <Card  cover={ <> 
                    <br/>

      <GiStarsStack className="cardIcon"/>
      </>
    } 
      className="serviceCard" title={t("Visual identity")} hoverable={true} bordered={true}>
                    {t(servfour)}

        </Card>
      </Col>
         <Col span={6}></Col>
     
    </Row>

    <Row className="middleRow" gutter={12}>         <Col span={6}></Col>
 </Row>
  <Row className="servicesRow" gutter={12}>

  <Col  span={4}>
        <Card  cover={ <> 
                    <br/>

      <FaLaptopCode className="cardIcon"/>
      </>
    } 
      className="serviceCard" title={t("Website development")} hoverable={true} bordered={true}>
             {t(servfive)}

        </Card>
      </Col>
         <Col span={6}></Col>

       <Col span={4}>
        <Card  cover={ <> 
                    <br/>

      <IoRocket className="cardIcon"/>
      </>
    } 
      className="serviceCard" title={t("Traffic Management")} hoverable={true} bordered={true}>

                  {t(servsix)}

         </Card>
      </Col>
    </Row>

              </Content>
              {button && (
                <Button 
                      className="servBtn"

                name="submit" onClick={() => scrollTo("contact")}>
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
