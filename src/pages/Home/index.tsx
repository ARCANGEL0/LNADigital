import { lazy, useState } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { CircleSpinnerOverlay } from 'react-spinner-overlay'


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const GalleryBlock = lazy(() => import("../../components/Gallery"));
const Home = () => {

    const [loading, setLoading] = useState(false)

  function carregar(estado: any) {
      setLoading(estado);
    }
  return (
    <Container>
    <ScrollToTop/>
 
      <CircleSpinnerOverlay
      　　loading={loading} 
      color="#fefefe"
       overlayColor="rgba(53,53,53,0.8)"
      />


  {/* 
    <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
   
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg" 
        id="about"
      />*/}
 
         <MiddleBlock
        title='Services'
        content='teste'
        button='Get in touch'
        id="services"
      />

<ContentBlock
        type="left"
        title='Impulsione já os seus negócios'
        content='texto chamativo'
        icon="waving.svg"
        id="product"
      />

 <GalleryBlock
       title="Our portfolio"
       id="gallery"
      />


      <Contact

        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
        carregar={carregar}
      />
    </Container>
  );
};

export default Home;
