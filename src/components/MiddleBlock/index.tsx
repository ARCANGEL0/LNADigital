import { Row, Col, Card,  } from "antd";
import { withTranslation } from "react-i18next";
import {HiOutlineLightBulb} from 'react-icons/hi';
import {AiOutlineNotification} from 'react-icons/ai';
import {IoShareSocialSharp, IoRocket} from 'react-icons/io5';
import {MdOutlinePhonelink, MdPhonelinkSetup} from 'react-icons/md';
  
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


      <AiOutlineNotification className="cardIcon"/>
      </>
    } title="Otimização De Sites - SEO " hoverable={true} bordered={true}>
          Card content
        </Card>
      </Col>
                  <Col span={3}></Col>
      <Col  span={4}>
        <Card  cover={ <> 
                    <br/>

      <HiOutlineLightBulb className="cardIcon"/>
      </>
    } 
      className="serviceCard" title="Marketing digital" hoverable={true} bordered={true}>
          Card content
        </Card>
      </Col>
                  <Col span={3}></Col>

      <Col  span={4}>
        <Card  cover={ <> 
                    <br/>

      <MdOutlinePhonelink className="cardIcon"/>
      </>
    } 
      className="serviceCard" title="Criação de sites e aplicativos" hoverable={true} bordered={true}>
          Card content
        </Card>
      </Col>
    </Row>
<br/>
<br/>
      <Row gutter={16}>
      <Col span={4}>
        <Card  cover={ <> 
                    <br/>

      <IoShareSocialSharp className="cardIcon"/>
      </>
    } 
      className="serviceCard" title="Social media" hoverable={true} bordered={true}>
          Card content
        </Card>
      </Col>
                        <Col span={3}></Col>


      <Col span={4}>
        <Card  cover={ <> 
                    <br/>

      <MdPhonelinkSetup className="cardIcon"/>
      </>
    } 
      className="serviceCard" title="Design digital" hoverable={true} bordered={true}>
          Card content
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
          Card content
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
