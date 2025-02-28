import { Row, Col } from "antd";
import {useState, useEffect} from 'react';
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { ContentBlockProps } from "../ContentBlock/types";
import { Fade } from "react-awesome-reveal";
import Helmet from 'react-helmet';




import {
  IntroBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const IntroBlock = ({
  title,
  content,
  button,
  icon,
  t,
  imgId,
  width,
  height,
  rowClass,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };



  return (


    <IntroBlockContainer id={id} >
     
<Helmet>
                <title>{t('Digital Solutions and Marketing | LNA Digital Agency')}</title>
                <meta name="description" content={t("We are specialists in marketing and strategic solutions that will help you boost the reach of your business and accelerate your company's growth by masterfully implementing innovative strategies and solutions for your trade, attracting more customers and expanding your target audience. Get results right away! Contact us!")} />
             
        <meta name="robots" content="index,follow"/>
     <link rel="canonical" href="https://lnadigital.com" />

   <meta property="og:locale" content="pt_BR" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


<meta name="google-site-verification" content="..."/>
        <meta property="og:title" content={t('More than an agency, we are a team dedicated to results and goals and we offer innovative solutions for your business, improving your marketing and digital appearance and boosting your reach!')} />
     

<meta name="keywords" content={t('Logos, Digital Advice,Frontend development, store,social networks, publicity, paid posts, Digital marketing, digital design, marketing solutions, seo, seo optimization,marketing, target ad, social media, email marketing, marketing strategy, seo services,websites, graphical design, logo design, website design, web development, brand, paid traffic, software, ecommerce, communication, advertising, ads, web agency, wordpress, design, target audience, graphic design, logos, website creation, digital design, responsive website, app, mobile, sales, salesforce, strategy, commerce, commercial')}/>
        <meta property="og:description" content={t("We are specialists in marketing and strategic solutions that will help you boost the reach of your business and accelerate your company's growth by masterfully implementing innovative strategies and solutions for your trade, attracting more customers and expanding your target audience. Get results right away! Contact us!")} />
        <meta property="og:image" content="https://lnadigital.com/img/svg/logo.png" />
       
      <meta property="og:type" content="website" />

        <meta property="og:image:alt" content="LNA Assessoria Digital" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://lnadigital.com" />
        <meta property="og:site_name" content={t('Digital Solutions and Marketing | LNA Digital Agency')} />
        
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="https://lnadigital.com"/>
        <meta name="twitter:title" content={t('Digital Solutions and Marketing | LNA Digital Agency')}/>
        <meta name="twitter:creator" content="ARCANGELO"/>
        <meta name="twitter:description" content={t('More than an agency, we are a team dedicated to results and goals and we offer innovative solutions for your business, improving your marketing and digital appearance and boosting your reach!')} />
        <meta name="twitter:image" content="https://lnadigital.com/img/svg/logo.png"/>





   </Helmet>



      <Fade direction="right">
        <Row justify="space-between" align="middle" className={rowClass}>
          

             <Col lg={11} md={11} sm={12} xs={24}>
          {icon === ''  ?   '' : 
            <SvgIcon  className="" imgId={imgId} src={icon} width={width} height={height} />
          }
          </Col>

          <Col lg={11} md={11} sm={11} xs={24}>
                      <ContentWrapper>


              <h6 style={{fontSize: '1.75rem', color: '#edf2efff'}}>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                       className="introBtn"

                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("services")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>

                          </ContentWrapper>


                      </Col>


         
      
        </Row>

      </Fade>
    </IntroBlockContainer>
  );
};

export default withTranslation()(IntroBlock);
