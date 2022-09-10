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


   
    <ContentBlock
        type="right"
        title='Titulo'
        content='Texto'
        button={IntroContent.button}
        icon="insta.gif"
        id="intro"
                imgId="insta" 
                width="50%"
                height="50%"
        rowClass=""

      />
   
   
  <ContentBlock
        type="left"
        title='Lorem'
        content={AboutContent.text}
          section={AboutContent.section}

        icon="" 
        id="about"
                imgId=""
        rowClass=""
             width="100%"
                height="100%"

      />
 
  <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="phone.gif" 
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
        icon=""
        id="intro3"
                imgId=""
             width="100%"
                height="100%"
                        rowClass=""

      />

 
  <ContentBlock
        type="right"
        title='Sobre nós'
        content={AboutContent.text}
  
        icon="" 
        id="about"
                imgId=""
        rowClass=""
             width="100%"
                height="100%"

      />


  <ContentBlock
        type="left"
        title='Titulo'
        content='Texto'
        icon=""
        id="intro2"
                imgId=""
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

  <ContentBlock
        type="right"
        title=''
        content=''
        icon=""
        id="line"
        imgId=""
        rowClass="rowLine"
 
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
        icon=""
        id="socialsec"
        imgId=""
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
