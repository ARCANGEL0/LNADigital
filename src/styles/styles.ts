import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`


--space-cadet: #212738ff;
--bittersweet: #f97068ff;
--maximum-green-yellow: #d1d646ff;
--cultured: #edf2efff;
--vivid-sky-blue: #57c4e5ff;
--dark-blue: #3e8ba3;


    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background-image: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: red !important;
    }

    input,
    textarea {
        border-radius: 4px;
            border: 1px solid #cacaca;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #034991 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #212738;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #212738;
        font-size: 21px;        
        line-height: 1.41;
                          text-align: justify;

    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #ff0000;

        :hover {
            color: red !important;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }
#line {
  margin-bottom: -60vh;

           @media only screen and (max-width: 890px) {
               margin-left: 0vw;
  margin-bottom: 0vh;
  margin-top: -40%;
        }
      
        @media only screen and (max-width: 414px) {
              margin-left: 0vw;
  margin-bottom: 0vh;
  margin-top: -40%;
        }



}
.phonegirlRow h6 {
  font-size: 2.45rem;
}
.rowLine {
  background: #003140;
  width: 200%;
  margin-left: -10vw;
  margin-top: -56vh;
height: 12vh;

              @media only screen and (max-width: 890px) {
               margin-left: 0vw !important;
                 width: auto;
                margin-right: 0;

  margin-top: 0vh;
        }
      
        @media only screen and (max-width: 414px) {
              margin-left: 0vw !important;
                width: auto;
                margin-right: 0;

  margin-top: 0vh;
        }


} 


.qJjLP {

 @media only screen and (max-width: 890px) {


            align-self: center;


        }
      
        @media only screen and (max-width: 414px) {
            align-self: center;

        }
}

#codeimg {
  margin-left: 10vw;
  margin-top: 55vh;
    @media only screen and (max-width: 890px) {
               margin-left: 0vw;
  margin-top: 0vh;
                  width: 100%;


        }
      
        @media only screen and (max-width: 414px) {
              margin-left: 0vw;
  margin-top: 0vh;
                  width: 100%;

        }



}

.cRDcaM {
    @media only screen and (max-width: 890px) {

            margin-left: 20%;
        }
      
        @media only screen and (max-width: 414px) {


            margin-left: 20%;


        }
}
.cRDcaM a:not(:last-child) {


  @media only screen and (max-width: 890px) {

             display: block;
        }
      
        @media only screen and (max-width: 414px) {
                  display: block;

        }
}
.socialLinks {
  justify-content: center !important;
  align-items: 'middle';
  padding-top: 1rem;

  @media only screen and (max-width: 890px) {
  justify-content: center !important;

             justify-content: 'start';
  align-items: 'middle';
        }
      
        @media only screen and (max-width: 414px) {
            justify-content: center !important;

               justify-content: 'start';
  align-items: 'middle';
        }

}

.iconCol {

  @media only screen and (max-width: 890px) {
          justify-content: center;
                  text-align: justify;
          font-size: 1.5rem !important;

        }
      
        @media only screen and (max-width: 414px) {

          justify-content: center;
                  text-align: justify;
          font-size: 1.5rem !important;
        }




}


.codeRow h6 {
  font-size: 2.5rem;
}

.about2Row,
.codeRow,
.marketingRow,
.phonegirlRow {

    @media only screen and (max-width: 890px) {
        
         text-align: center !important;
        }
      
        @media only screen and (max-width: 414px) {
        text-align: center !important;
        }

}
#banner2{
    @media only screen and (max-width: 890px) {
        
        margin-left: 15vw;

        }
      
        @media only screen and (max-width: 414px) {
        margin-left: 12vw;
        }


}

.iconTitleCol {
  @media only screen and (max-width: 890px) {
        
         text-align: center !important;
        }
      
        @media only screen and (max-width: 414px) {
        text-align: center !important;
        }


}
.aboutRow h6,
.seoRow h6,
.seoRow,
#intro3,
.aboutRow,
.socialRow

 {
    @media only screen and (max-width: 890px) {
        
         text-align: center !important;
        }
      
        @media only screen and (max-width: 414px) {
        text-align: center !important;
        }
}
.codeRow,
.about2Row,
.aboutRow,
.seoRow,
.phonegirlRow,
.marketingRow,
.socialRow { 

    @media only screen and (max-width: 890px) {
        
         text-align: justify;
        }
      
        @media only screen and (max-width: 414px) {
        text-align: justify;
        }


}

.socialRow h6 { 

    @media only screen and (max-width: 890px) {
        
        margin-left: 0vw;
                  text-align: justify;
        }
      
        @media only screen and (max-width: 414px) {
        margin-left: 0vw;
                  text-align: justify;
        }


}
#instaimg {
    @media only screen and (max-width: 890px) {
        
        margin-bottom: -10vh;
        }
      
        @media only screen and (max-width: 414px) {
        margin-bottom: -10vh;
       
        }


}
 
 #marketing{
    @media only screen and (max-width: 414px) {
        
        margin-top: 4.5vh;
        }
 }
.iconTitleCol {

      @media only screen and (max-width: 890px) {
          margin-left: 22vw;
          width: 50vw;
       

        }
      
        @media only screen and (max-width: 414px) {
          margin-left: 22vw;
          width: 50vw;

        }
}


 .iconImgCol { 
    @media only screen and (max-width: 890px) {
          margin-left: 41.5vw;
       

        }
      
        @media only screen and (max-width: 414px) {
          margin-left: 41.5vw;

        }

 }
 .marketingRow p {
   font-size: 1rem;
                     text-align: justify;

 }

 .iconContent { 
   font-size: 0.8rem !important;


  @media only screen and (max-width: 890px) {
             width: 90vw;
          font-size: 1rem !important;

        }
      
        @media only screen and (max-width: 414px) {
             width: 90vw;
        
          font-size: 1rem !important;
        }

 }

.introBtn {

  @media only screen and (max-width: 890px) {
              margin-left: 23.5vw !important;

        }
      
        @media only screen and (max-width: 414px) {
                   margin-left: 23.5vw !important;

        }

}
.dWLTLY {
    @media only screen and (max-width: 890px) {
             align-items:center;
             text-align:center;
             justify-content: center;
        }
      
        @media only screen and (max-width: 414px) {
             align-items:center;
             text-align:center;
             justify-content: center;
        }
}
.socialCol{ 

  @media only screen and (max-width: 890px) {
             align-items:center;
             text-align:center;
             justify-content: center;
        }
      
        @media only screen and (max-width: 414px) {
             align-items:center;
             text-align:center;
             justify-content: center;
        }

}
.footerRow {
   @media only screen and (max-width: 890px) {
             align-items:center;
        }
      
        @media only screen and (max-width: 414px) {
             align-items:center;

        }
}
.contactSubmit {
    @media only screen and (max-width: 890px) {
              margin-right: 3vw;

        }
      
        @media only screen and (max-width: 414px) {
                   margin-right: 3vw;

        }


}
#introgif {
margin-bottom: 5vh;
width: 76%;
height: 76%;

    @media only screen and (max-width: 890px) {
                    margin-left: 24.5%;
                    margin-top: 10vh;
                    width: 60%;
                    height: 60%;
        }
      
        @media only screen and (max-width: 414px) {
                             margin-left: 24.5%;
                             margin-top: 10vh;
        
                             width: 60%;
                      height: 60%;
        }
}
body::after { 

    @media only screen and (max-width: 890px) {
                    margin-bottom: -70%

        }
      
        @media only screen and (max-width: 414px) {
                             margin-bottom: -80%
        }

  content: "";
 background:url('https://i.ibb.co/jHjjqxG/bg.jpg');
 background-size: cover;
  opacity: 0.6;
    filter: brightness(55%);

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;  

}
.footerLinks {

padding-top: 1rem;
justify-content: 'space-evenly';



              @media only screen and (max-width: 890px) {
                    padding-left: 20vw !important;
        padding-right: 20vw !important;
          height: 27vh;
        width: 80vw !important;
        }
      
        @media only screen and (max-width: 414px) {
              padding-left: 20vw !important;
        padding-right: 20vw !important;
               height: 27vh;
        width: 80vw !important;
        }


}
.footer {

padding-top: 5px;
text-align: 'center';
justify-content: 'space-evenly';



              @media only screen and (max-width: 890px) {
                    padding-left: 20vw !important;
        padding-right: 20vw !important;
          height: 27vh;
        width: 80vw !important;
        }
      
        @media only screen and (max-width: 414px) {
              padding-left: 20vw !important;
        padding-right: 20vw !important;
               height: 27vh;
        width: 80vw !important;
        }

}
    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
    .slick-slide img {
        padding-left: 25px;
        padding-right: 25px;
        height: 42vh;
        width: 42vw !important;


              @media only screen and (max-width: 890px) {
                    padding-left: 20vw !important;
        padding-right: 20vw !important;
          height: 27vh;
        width: 80vw !important;
        }
      
        @media only screen and (max-width: 414px) {
              padding-left: 20vw !important;
        padding-right: 20vw !important;
               height: 27vh;
        width: 80vw !important;
        }


    }
    .slick-slider { 
        margin-left: -25vw !important;
        width: 90vw !important;

              @media only screen and (max-width: 890px) {
          margin-left: 0vw !important;
        }
      
        @media only screen and (max-width: 414px) {
          margin-left: 0vw !important;
        }
    }
    .cardIcon { 
    font-size: 370%;
    }

    .middleRow {
      margin-top: 10vh;
             @media only screen and (max-width: 890px) {
          margin-top: 0 !important;
        }
      
        @media only screen and (max-width: 414px) {
          margin-top: 0 !important;
        }
    }
    .serviceCard { 
            border: 1px solid #c2c2c2;
            width: 30vw;
            height: 60vh;


                     @media only screen and (max-width: 890px) {
                  width: 60vw;
                  height: 85vh;
                  margin-left: 26vw;
                  margin-bottom: 2.5vh;
        }
      
        @media only screen and (max-width: 414px) {
                  height: 64vh;

                  width: 60vw;
                  margin-left: 26vw;
                  margin-bottom: 2.5vh;

        }

   @media only screen and (max-width: 380px) {
                  height: 86vh;

                  width: 60vw;
                  margin-left: 26vw;
                  margin-bottom: 2.5vh;

        }
    }

    .ant-card-head{ 

        background: rgb(187, 0, 0);
        width: 32.9vw;
        margin-left: -1.6vw;
        height: 10px;
        margin-top: 1.5vh;


                     @media only screen and (max-width: 890px) {
                  width: 69vw;
                  margin-left: -4.7vw;
        }
      
        @media only screen and (max-width: 414px) {
                  width: 69vw;
                  margin-left: -4.7vw;

        }



    }

.sc-himrzO {


              @media only screen and (max-width: 890px) {
                 
                  display: flex;
                  flex-flow: column wrap;
        }
      
        @media only screen and (max-width: 414px) {
                         display: flex;
                         flex-flow: column wrap; 
        }
}
.cRDcaM { 
max-width: 240px;



              @media only screen and (max-width: 890px) {
                 max-width: 60% !important  ;

        }
      
        @media only screen and (max-width: 414px) {
           max-width: 60% !important;

        }


}

.servicesRow { 
margin-left: -8vw 

}

#footerUS,
#headerUS{ 

margin-right: 5px;

     @media only screen and (max-width: 890px) {
                 margin-right: 18px;

        }
      
        @media only screen and (max-width: 414px) {
           margin-right: 18px;

        }


}
#footerBR,
#headerBR { 
margin-right: 5px;

     @media only screen and (max-width: 890px) {
                 margin-right: 18px;

        }
      
        @media only screen and (max-width: 414px) {
           margin-right: 18px;

        }

}
#introRow {
  margin-right: -25vw;
}
#intro {
                  text-align: justify;


  padding-top: 8vh ;

@media only screen and (max-width: 890px) {
                  margin-top: -28px;
        }
      
        @media only screen and (max-width: 414px) {
                  margin-top: -28px;
        }
}

    .ant-row {

               @media only screen and (max-width: 890px) {
                   flex-flow: column wrap !important;
          margin-left: 0vw !important;
        }
      
        @media only screen and (max-width: 414px) {
           flex-flow: column wrap !important;
          margin-left: 0vw !important;
        }

    }
.ant-card-head-title {
padding: 12px 0;
font-weight: 800;
color: #fff;
text-align: center;
}
.ant-card-head::before {
  content: "";
  border: 11px solid;
  border-color: rgb(95,0,0) rgb(95,0,0) transparent transparent;
  position: absolute;
  left: -22px;
  bottom: 47.2vh;



         @media only screen and (max-width: 890px) {
display: none;         
        }
      
        @media only screen and (max-width: 460px) {
display: none;         
        }

          @media only screen and (max-width: 400px) {
display: none;         
         
        }


          @media only screen and (max-width: 380px) {
display: none;         
         
        }


}
.ant-card-head::after{

/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
      display: none;
}


/* Smartphones (portrait and landscape) ----------- */
@media only screen 
and (max-width : 500px) {
      display: none;
}


/* Smartphones (landscape) ----------- */
@media only screen 
and (min-width : 321px) {
/* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen 
and (max-width : 320px) {
      display: none;
}

/* iPads (portrait and landscape) ----------- */
@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) {
      display: none;
}

/* iPads (landscape) ----------- */
@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) 
and (orientation : landscape) {
      display: none;
}

/* iPads (portrait) ----------- */
@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) 
and (orientation : portrait) {
      display: none;
}

/* Desktops and laptops ----------- */
@media only screen 
and (min-width : 1224px) {
/* Styles */
}

/* Large screens ----------- */
@media only screen 
and (min-width : 1824px) {
/* Styles */
}

/* iPhone 4 ----------- */
@media
only screen and (-webkit-min-device-pixel-ratio : 1.5),
only screen and (min-device-pixel-ratio : 1.5) {
/* Styles */
}


         @media only screen and (max-width: 890px) {
      display: none;
        }
      
              @media only screen and (max-width: 400px) {
      display: none;
         
        }
  @media only screen and (max-width: 460px) {
      display: none;
         
        }


          @media only screen and (max-width: 380px) {
      display: none;
         
        }

    right: -22px !important;
      content: "";
  border: 11px solid;
  border-color: rgb(95,0,0) rgb(95,0,0) transparent transparent;
  position: absolute;

  bottom: 47.2vh;
}

.ant-card-head::after {
  left: auto;
  right: 0;
  border-color: rgb(95,0,0) transparent transparent rgb(95,0,0);
}
`;


