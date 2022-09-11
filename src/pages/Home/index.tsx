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
const IntroBlock = lazy(() => import("../../components/IntroBlock"));
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


   
    <IntroBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="phone_marketing.gif"
        id="intro"
                imgId="introgif" 
                width="56%"
                height="56%"
        rowClass="introRow"

      />
   
   
  <ContentBlock
        type="left"
        title='Lorem'
        content={AboutContent.text}
          section={AboutContent.section}

        icon="marketing.gif" 
        id="about"
                imgId="marketing"
        rowClass=""
             width="100%"
                height="100%"

      />
 
  <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="girlphone.gif" 
        id=""
                imgId=""
        rowClass=""
             width="100%"
                height="100%"

      />

 
    <ContentBlock
        type="left"
        title='Titulo'
        content='Texto'
        icon="mark.gif"
        id="intro3"
                imgId="banner2"
             width="100%"
                height="100%"
                        rowClass=""

      />

 
  <ContentBlock
        type="right"
        title='Sobre nós'
        content={AboutContent.text}
  
        icon="iso.gif" 
        id="about"
                imgId="aboutimg"
        rowClass=""
             width="100%"
                height="100%"

      />


  <ContentBlock
        type="left"
        title='Titulo'
        content='Texto'
        icon="phone3"
        id="intro2"
                imgId="phone3"
                             width="100%"
                height="100%"
        rowClass=""

      />
   



    



<ContentBlock
        type="right"
        title='Impulsione já os seus negócios'
        content='texto chamativo'
        icon="code.gif"
        imgId="codeimg"
        id="code"
                rowClass=""
             width="100%"
                height="100%"
      />


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
        icon="insta.gif"
        id="socialsec"
        imgId="instaimg"
        rowClass="socialRow"
             width="100%"
                height="100%"
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
