import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
   width,
  height,
    imgId,
rowClass,

  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection id={id}>
      <Fade direction="left">
        <Row justify="space-between" align="middle" className={rowClass} >
         <Col lg={11} md={11} sm={12} xs={24}>
          {icon === ''  ?   '' : 
            <SvgIcon   className="" imgId={imgId} src={icon} width={width} height={height} />
          }
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col className="iconCol" key={id} span={11}>
                          <SvgIcon className="iconImgCol" imgId="" src={item.icon} width="60px" height="60px" />
                          <MinTitle className="iconTitleCol" >{t(item.title)}</MinTitle>
                          <MinPara className="iconContent">{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
