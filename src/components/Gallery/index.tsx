import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface GalleryProps {
  title: string;
   id: string;
  t: any;
}
 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,

  };


const Gallery = ({ title, t, id }: GalleryProps) => {
 


  return (
    <MiddleBlockSection id={id}>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col  lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
          
                <br/>
<Slider {...settings}>
      
        <img className="img" src={require("./../../content/gallery/confeitaria.png" )} id=""/>
      
              <img className="img" src={require("./../../content/gallery/advocacia.png" )} id="" />
        <img className="img" src={require("./../../content/gallery/icarus2.png" )} id="" />
        <img className="img" src={require("./../../content/gallery/icarus3.png" )} id="" />
        <img className="img" src={require("./../../content/gallery/beleza.png" )} id="" />
        <img className="img" src={require("./../../content/gallery/imobiliaria.png" )} id="" />
        <img className="img" src={require("./../../content/gallery/psico1.png" )} id="" />

        <img className="img" src={require("./../../content/gallery/psico2.png" )} id="" />

    </Slider>




            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(Gallery);
