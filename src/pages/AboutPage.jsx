import React from "react";
import styled from 'styled-components';
import background from "../images/about/round_background.png";
import logo from "../images/logo/about_logo.svg"
import solux from "../images/about/solux_img.png";
import dacos from "../images/about/dacos_img.png";
import soluxblue from "../images/logo/solux_blue.svg";
import dacosblue from "../images/logo/dacos_blue.svg";
import poster1 from "../images/about/poster1.svg";
import poster2 from "../images/about/poster2.svg";
import { useMediaQuery } from 'react-responsive';
import Slider from "react-slick";
import "../style/slick.css";

const AboutContainer = styled.div`
    width: 100%;
    height: auto;
`

const LogoContainer = styled.div`
    height: 97vh;
    width: 100%;
`

const About = styled.div`
    padding: 0vw 15vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 100px;
`

const RoundBackground = styled.div`
    background-image: url(${background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
    width: 100%;
    height: 130%;
    border: none;
`

const DXSLogo = styled.div`
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: clamp(80vw, 100vw, 90vw);
    height: clamp(220px, 100vw, 240px);
`

const InfoContainer = styled.div`
    margin-top: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    z-index: 11;
`

const InfoTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
`

const GroupTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const InfoBoldText = styled.div`
    font-weight: 600;
    font-size: calc(0.26vw + 20.08px);
`

const DSSubtitle = styled.div`
    font-weight: 100;
    font-size: calc(0.26vw + 10.08px);
    margin-bottom: 10px;
`

const DSContent = styled.div`
    font-weight: 200;
    width: 80%;
    text-align : center;
    word-break: keep-all;
    font-size: calc(0.26vw + 11.08px);
    line-height: 160%;
    margin-top: 20px;
    text-align: center;
`

const PosterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`

const PosterWrapper = styled.div`
    width: 48%;
    border: 1px solid #FFFFFF;
    border-radius: 3%;
    overflow: hidden;
`

const PosterImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: fill;
`

const MobilePosterContainer = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    width: 100%;
    height: auto;
`;

const MobilePoster = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    border: 1px solid #FFFFFF;
    border-radius: 3%;
    background: none;
`;

const MobilePosterImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

const MobileImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    height: auto;
`;

const DacosInfoContainer = styled.div`
    margin: 200px 0px;
`

const SoluxInfoContainer = styled.div`
    margin-bottom: 150px;
`

const DacosImage = styled.div`
    width: 90%;
    aspect-ratio: 2;
    background-image: url(${dacos});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const SoluxImage = styled.div`
    width: 90%;
    aspect-ratio: 2;
    background-image: url(${solux});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const SoluxBlueLogo = styled.div`
    width: clamp(130px, 2vw, 160px);
    height: clamp(40px, 2vw, 50px);
    background-image: url(${soluxblue});
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 10px;
`

const DacosBlueLogo = styled.div`
    width: clamp(130px, 2vw, 160px);
    height: clamp(40px, 2vw, 50px);
    background-image: url(${dacosblue});
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 10px;
`

const AboutPage = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const MobilePoster1 = (props) => (
        <MobilePoster>
            <MobilePosterImage src={poster1} alt="Poster 1" />
        </MobilePoster>
    );
    
    const MobilePoster2 = (props) => (
        <MobilePoster>
            <MobilePosterImage src={poster2} alt="Poster 2" />
        </MobilePoster>
    );

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
                </MainConatiner>
                <RoundBackground/> 
            </LogoContainer>
            
            { isMobile && <>
            <About style={{ padding: "0vw 10vw"}}>
                <MobilePosterContainer>
                    <MobileImageContainer>
                        <Slider {...settings}>
                            <MobilePoster1 />
                            <MobilePoster2 />
                        </Slider>
                    </MobileImageContainer>
                    <InfoTextContainer>
                        <InfoBoldText>DACOS X SOLUX 해커톤</InfoBoldText>
                        <DSContent style={{ width: "100%" }}>DACOS X SOLUX 해커톤은 다코스의 데이터 분석 능력과 솔룩스의 개발 능력을 결합하여 협력적 사고와 미래지향적 아이디어 창출을 목표로, 새로운 아이디어를 모색하고 실제 기획 및 구현까지의 진행을 도모합니다.</DSContent>
                    </InfoTextContainer>
                </MobilePosterContainer>
                <DacosInfoContainer>
                    <GroupTextContainer>
                        <DacosImage style={{ width: "90%"}} />
                        <DacosBlueLogo />
                        <DSSubtitle>소프트웨어학부 데이터분석 학회</DSSubtitle>
                        <DSContent style={{ width: "90%"}}>DACOS는 숙명여대 소프트웨어학부의 최초 데이터 분석 동아리로, "Data Analysis Club of Sookmyung" 의 약자입니다. DACOS는 데이터 처리, 머신러닝, 딥러닝 등의 기술을 함께 학습하며, 데이터 분석에 대한 깊이 있는 논의와 협업을 위한 공간을 제공합니다.</DSContent>
                    </GroupTextContainer>
                </DacosInfoContainer>

                <SoluxInfoContainer style={{ marginBottom: "100px"}}>
                    <GroupTextContainer>
                        <SoluxImage />
                        <SoluxBlueLogo />
                        <DSSubtitle>소프트웨어학부 개발 동아리</DSSubtitle>
                        <DSContent style={{ width: "90%"}}>리눅스 학회에서 출발한 Sookmyung Linux, SOLUX는 더 다양한 분야에 도전합니다. SOLUX는 교내 유일 프로그래밍 중앙동아리로, 다양한 전공의 학우들이 모여 여러 분야와 IT를 융합하고 새로운 IT 기술을 향해 나아갑니다.</DSContent>
                    </GroupTextContainer>
                </SoluxInfoContainer>
            </About>        
            </>
            } 
                { !isMobile && <>
                <About>
                    <InfoContainer>
                        <PosterContainer>
                            <PosterWrapper>
                                <PosterImage src={poster1} alt="Poster 1" />
                            </PosterWrapper>
                            <PosterWrapper>
                                <PosterImage src={poster2} alt="Poster 2" />
                            </PosterWrapper>
                        </PosterContainer>
                        <InfoTextContainer>
                            <InfoBoldText>DACOS X SOLUX 해커톤</InfoBoldText>
                            <DSContent>DACOS X SOLUX 해커톤은 DACOS의 데이터 분석 능력과 SOLUX의 개발 능력을 결합하여 협력적 사고와 미래지향적 아이디어 창출을 목표로, 새로운 아이디어를 모색하고 실제 기획 및 구현까지의 진행을 도모합니다.</DSContent>
                        </InfoTextContainer>
                    </InfoContainer>

                    <DacosInfoContainer>
                        <GroupTextContainer>
                            <DacosImage />
                            <DacosBlueLogo />
                            <DSSubtitle>소프트웨어학부 데이터분석 학회</DSSubtitle>
                            <DSContent style={{ width: "70%"}}>DACOS는 숙명여대 소프트웨어학부의 최초 데이터 분석 동아리로, "Data Analysis Club of Sookmyung" 의 약자입니다. DACOS는 데이터 처리, 머신러닝, 딥러닝 등의 기술을 함께 학습하며, 데이터 분석에 대한 깊이 있는 논의와 협업을 위한 공간을 제공합니다.</DSContent>
                        </GroupTextContainer>
                    </DacosInfoContainer>

                    <SoluxInfoContainer>
                        <GroupTextContainer>
                            <SoluxImage />
                            <SoluxBlueLogo />
                            <DSSubtitle>소프트웨어학부 개발 동아리</DSSubtitle>
                            <DSContent style={{ width: "70%"}}>리눅스 학회에서 출발한 Sookmyung Linux, SOLUX는 더 다양한 분야에 도전합니다. SOLUX는 교내 유일 프로그래밍 중앙동아리로, 다양한 전공의 학우들이 모여 여러 분야와 IT를 융합하고 새로운 IT 기술을 향해 나아갑니다.</DSContent>
                        </GroupTextContainer>
                    </SoluxInfoContainer>
                </About>
                </>}
                
        </AboutContainer>
        
    );
};

export default AboutPage;
