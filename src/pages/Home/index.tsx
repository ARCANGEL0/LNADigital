import { lazy, useState,useEffect } from "react";

import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import EndingBlock from "../../content/EndingBlock.json";
import ContactContent from "../../content/ContactContent.json";
import ServicesContent from "../../content/ServicesContent.json";
import i18n from "i18next";

import { CircleSpinnerOverlay } from 'react-spinner-overlay'

 
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const WhatsIco = lazy(() => import("../../components/WhatsIco/"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const GalleryBlock = lazy(() => import("../../components/Gallery"));
const IntroBlock = lazy(() => import("../../components/IntroBlock"));



  const param= new URLSearchParams(window.location.search) 



const Home = () => {

    const [loading, setLoading] = useState(false)


useEffect( () => {

 const params = new URLSearchParams(window.location.search) 
  
if(params.has('lng')) {
const data: string = params.get('lng')!;

    i18n.changeLanguage(data);

}
else {
		  i18n.changeLanguage('ptbr');
}



} );


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

      <WhatsIco />
   
    <IntroBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="bannerintro.gif"
        id="intro"
                imgId="introgif" 
                width=""
                height=""
        rowClass="introRow"

      />
   
   
  <ContentBlock
        type="left"
        title={IntroContent.titletwo}
        content={IntroContent.texttwo}
          section={IntroContent.section}

        icon="marketing.gif" 
        id="about"
                imgId="marketing"
        rowClass="marketingRow"
             width="100%"
                height="100%"

      />

      
  <ContentBlock
        type="right"
        title={IntroContent.titlethree}
        content={IntroContent.textthree}
        icon="girlphone.gif" 
        id=""
                imgId=""
        rowClass="phonegirlRow"
             width="100%"
                height="100%"

      />

 
    <ContentBlock
        type="left"
        title={IntroContent.titlefour}
        content={IntroContent.textfour}
        icon="phonemarket.gif"
        id="intro3"
                imgId="banner2"
             width="75%"
                height="75%"
                        rowClass="seoRow"

      />

 
  <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
  
        icon="iso.gif" 
        id="about"
                imgId="aboutimg"
        rowClass="aboutRow"
             width="100%"
                height="100%"

      />




  <ContentBlock
        type="left"
             title={AboutContent.titletwo}
        content={AboutContent.texttwo}
        icon="mark.gif"
        id="intro2"
                imgId="phone3"
                             width="100%"
                height="100%"
        rowClass="about2Row"

      />
   



    



<ContentBlock
        type="right"
           title={AboutContent.titlethree}
        content={AboutContent.textthree}
        icon="code.gif"
        imgId="codeimg"
        id="code"
                rowClass="codeRow"
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
        content=''
        servone={ServicesContent.one}
        servtwo={ServicesContent.two}

        servthree={ServicesContent.three}

        servfour={ServicesContent.four}

        servfive={ServicesContent.five}

        servsix={ServicesContent.six}

        button='Get in touch'
        id="services"
               

      />


         <GalleryBlock
        title='Our portfolio'
        id="gallery"
               

      />


 
      <ContentBlock
        type="left"
        title={EndingBlock.title}
        content={EndingBlock.text}
        icon="insta.gif"
        id="socialsec"
        imgId="instaimg"
        rowClass="socialRow"
             width="65%"
                height="65%"
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
