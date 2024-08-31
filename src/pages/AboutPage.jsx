import React from "react";
import styled from 'styled-components';
import background from "../images/about/round_background.png";
import logo from "../images/logo/logo.svg"
import solux from "../images/about/solux_img.png";
import dacos from "../images/about/dacos_img.png";
import poster1 from "../images/about/poster1.svg";
import poster2 from "../images/about/poster2.svg";
import { useMediaQuery } from 'react-responsive';
import Slider from "react-slick";
import "../style/slick-theme.css";
import "../style/slick.css";

const AboutContainer = styled.div`
    
`

const LogoContainer = styled.div`
    height: 97vh;
`

const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 30px;
`

const RoundBackground = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
    width: 100%;
    height: clamp(80%, 1.5vw, 150%);
    border: none;
`

const DXSLogo = styled.div`
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: clamp(350px, 60vw, 400px);
    height: clamp(100px, 60vw, 150px);
`

const MainBoldText = styled.div`
    font-weight: 800;
    font-size: clamp(2.5rem, 60vw, 2.7rem);
`

const MainLightText = styled.div`
    font-weight: 100;
    font-size: 0.65rem;
`

const InfoContainer = styled.div`
    height: 90vh;
    width: clamp(40vw, 100vw, 50vw);
    margin-top: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

const InfoTextContainer = styled.div`
    width: clamp(40vw, 100vw, 50vw);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const InfoBoldText = styled.div`
    font-weight: 600;
    font-size: clamp(1.3rem, 1.5vw, 1.7rem);
    width: clamp(40vw, 100vw, 50vw);
`

const InfoLightText = styled.div`
    font-weight: 200;
    font-size: clamp(0.7rem, 1.5vw, 0.8rem);
    line-height: 140%;
    width: clamp(40vw, 100vw, 50vw);
`

const DSTitle = styled.div`
    margin-top: 10vh;
    font-weight: 600;
    font-size: clamp(2.5rem, 1vw, 2.7rem);
    color: #0057FF;
    width: clamp(40vw, 100vw, 50vw);
`

const DSSubtitle = styled.div`
    font-weight: 100;
    font-size: 0.8rem;
    width: clamp(40vw, 100vw, 50vw);
    margin-bottom: 10px;
`

const DSContent = styled.div`
    font-weight: 200;
    font-size: clamp(0.7rem, 100vw, 0.8rem);
    line-height: 140%;
    width: clamp(40vw, 100vw, 50vw);
    margin-top: 10px;
`

const DacosInfoContainer = styled.div`
    height: 87vh;
`

const SoluxInfoContainer = styled.div`
    height: clamp(76vh, 100vw, 80vh);
`

const MobilePosterContainer = styled.div`
    height: 100vh;
    width: clamp(40vw, 100vw, 50vw);
    margin-top: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

const Poster1 = styled.div`
    width: 101%;
    height: 101%;
    background-image: url(${poster1});
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 1vh;
`

const Poster2 = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${poster2});
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 20px;
    margin-left: 1vh;
`

const MobilePoster1 = styled.div`
    width: 70%;
    height: 70vw;
    background-image: url(${poster1});
    background-size: cover;
    background-repeat: no-repeat;
`

const MobilePoster2 = styled.div`
    width: 100%;
    height: 70vw;
    background-image: url(${poster2});
    background-size: contain;
    background-repeat: no-repeat;
`

const DacosImage = styled.div`
    width: clamp(40vw, 100vw, 50vw);
    height: clamp(10vw, 100vw, 20vw);
    background-image: url(${dacos});
    background-size: contain;
    background-repeat: no-repeat;
`;

const SoluxImage = styled.div`
    width: clamp(40vw, 100vw, 50vw);
    height: clamp(10vw, 100vw, 20vw);
    background-image: url(${solux});
    background-size: contain;
    background-repeat: no-repeat;
`;

const ImageContainer = styled.div`
    display: flex;
    width: clamp(30vw, 100vw, 50vw);
    height: clamp(25vw, 100vw, 35vw);
`

const MobileImageContainer = styled.div`
    display: flex;
    width: clamp(41vw, 100vw, 51vw);
    height: 75vw;
`

const AboutPage = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <AboutContainer>
            <LogoContainer>
                <MainConatiner>
                    <DXSLogo />
                    <MainBoldText>연합해커톤</MainBoldText>
                    <MainLightText>SOOKMYUNG WOMEN'S UNIVERSITY</MainLightText>
                </MainConatiner>

                <RoundBackground/> 
            </LogoContainer>

            <About>
                { isMobile && <>
                <MobilePosterContainer>
                    <MobileImageContainer>
                        <Slider {...settings}>
                            <MobilePoster1 />
                            <MobilePoster2 />
                        </Slider>
                    </MobileImageContainer>
                    <InfoTextContainer>
                        <InfoBoldText>DACOS X SOLUX 해커톤</InfoBoldText>
                        <InfoLightText style={{ width: isMobile? "clamp(40vw, 100vw, 50vw)" : "clamp(20vw, 100vw, 25vw)" }}>DACOS X SOLUX 해커톤은 다코스의 데이터 분석 능력과 솔룩스의 개발 능력을 결합하여 협력적 사고와 미래지향적 아이디어 창출을 목표로, 새로운 아이디어를 모색하고 실제 기획 및 구현까지의 진행을 도모합니다.</InfoLightText>
                    </InfoTextContainer>
                </MobilePosterContainer>
                    
                </>
                }
                
                { !isMobile && <>
                    <InfoContainer>
                        <ImageContainer>
                            <Poster1 />
                            <Poster2 />
                        </ImageContainer>
                        <InfoTextContainer>
                            <InfoBoldText>DACOS X SOLUX 해커톤</InfoBoldText>
                            <InfoLightText style={{ width: isMobile? "clamp(40vw, 100vw, 50vw)" : "clamp(20vw, 100vw, 25vw)" }}>DACOS X SOLUX 해커톤은 다코스의 데이터 분석 능력과 솔룩스의 개발 능력을 결합하여 협력적 사고와 미래지향적 아이디어 창출을 목표로, 새로운 아이디어를 모색하고 실제 기획 및 구현까지의 진행을 도모합니다.</InfoLightText>
                        </InfoTextContainer>
                    </InfoContainer>
                </>}


                

            <DacosInfoContainer>
                <InfoTextContainer>
                    <DSTitle>DACOS</DSTitle>
                    <DSSubtitle>소프트웨어학부 데이터분석 학회</DSSubtitle>
                </InfoTextContainer>
                
                <InfoTextContainer>
                    <DacosImage />
                    <DSContent>DACOS는 숙명여대 소프트웨어학부의 최초 데이터 분석 동아리로, "Data Analysis Club of Sookmyung" 의 약자입니다. DACOS는 데이터 처리, 머신러닝, 딥러닝 등의 기술을 함께 학습하며, 데이터 분석에 대한 깊이 있는 논의와 협업을 위한 공간을 제공합니다.</DSContent>
                </InfoTextContainer>
            </DacosInfoContainer>

            <SoluxInfoContainer>
                <InfoTextContainer>
                    <DSTitle>SOLUX</DSTitle>
                    <DSSubtitle>소프트웨어학부 개발 동아리</DSSubtitle>
                </InfoTextContainer>

                <InfoTextContainer>
                    <SoluxImage />
                    <DSContent>리눅스 학회에서 출발한 Sookmyung Linux, SOLUX는 더 다양한 분야에 도전합니다. SOLUX는 교내 유일 프로그래밍 중앙동아리로, 다양한 전공의 학우들이 모여 여러 분야와 IT를 융합하고 새로운 IT 기술을 향해 나아갑니다.</DSContent>
                </InfoTextContainer>
            </SoluxInfoContainer>
            </About>
        </AboutContainer>
        
    );
};

export default AboutPage;
