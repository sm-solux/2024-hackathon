import React from "react";
import styled from 'styled-components';
import background from "../images/about/round_background.png";
import logo from "../images/logo/about_logo.png"
import none from "../images/none.png";
import solux from "../images/about/solux_img.png";
import dacos from "../images/about/dacos_img.png"

const AboutContainer = styled.div`

`

const LogoContainer = styled.div`
    height: 92vh;
`

const MainConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0px;
`

const RoundBackground = styled.div`
    /* position: absolute;
    bottom: 0;
    left: 0; */
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
    width: 100%;
    height: clamp(80%, 1.5vw, 150%);
    border: none;
`

const MainLogo = styled.div`
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 80%;
    height: 100px;
    margin-bottom: 10px;
`

const MainBoldText = styled.div`
    font-weight: 800;
    font-size: clamp(2.5rem, 1.5vw, 2.8rem);
`

const MainLightText = styled.div`
    font-weight: 100;
    font-size: clamp(0.7rem, 1vw, 0.9rem);
`

const InfoContainer = styled.div`
    height: 85vh;
    margin-top: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

const InfoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InfoBoldText = styled.div`
    font-weight: 800;
    font-size: clamp(1rem, 1.5vw, 1.3rem);
    width: 55vw;
`

const InfoLightText = styled.div`
    font-weight: 100;
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    width: 55vw;
`

const DSTitle = styled.div`
    margin-top: 10vh;
    font-weight: 600;
    font-size: clamp(2rem, 1vw, 2.5rem);
    color: #0057FF;
    width: 55vw;
`

const DSSubtitle = styled.div`
    font-weight: 200;
    font-size: 0.8rem;
    width: 55vw;
    margin-bottom: 10px;
`

const DSContent = styled.div`
    font-weight: 100;
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    width: 55vw;
    margin-top: 10px;
`

const DacosInfoContainer = styled.div`
    height: 70vh;
`

const SoluxInfoContainer = styled.div`
    height: 73vh;
`

const Image = styled.div`
    width: 55vw;
    height: 250px;
    background-image: url(${none});
    background-size: cover;
    background-repeat: no-repeat;
`

const DacosImage = styled.div`
    width: 55vw;
    height: clamp(100px, 1.5vw, 200px);
    background-image: url(${dacos});
    background-size: contain;
    background-repeat: no-repeat;
`

const SoluxImage = styled.div`
    width: 55vw;
    height: clamp(100px, 1.5vw, 200px);
    background-image: url(${solux});
    background-size: contain;
    background-repeat: no-repeat;
`

const ImageContainer = styled.div`
    display: flex;
    width: 55vw;
    height: 300px;
`

const AboutPage = () => {
    return (
        <AboutContainer>
            <LogoContainer>
                <MainConatiner>
                    <MainLogo />
                    <MainBoldText>연합해커톤</MainBoldText>
                    <MainLightText>SOOKMYUNG WOMEN'S UNIVERSITY</MainLightText>
                </MainConatiner>

                <RoundBackground/> 
            </LogoContainer>

            <InfoContainer>
                <ImageContainer>
                    <Image />
                </ImageContainer>

                <InfoTextContainer>
                    <InfoBoldText>DACOS X SOLUX 해커톤</InfoBoldText>
                    <InfoLightText>DACOS X SOLUX 해커톤은 다코스의 데이터 분석 능력과 솔룩스의 개발 능력을 결합하여 협력적 사고와 미래지향적 아이디어 창출을 목표로, 새로운 아이디어를 모색하고 실제 기획 및 구현까지의 진행을 도모합니다.</InfoLightText>
                </InfoTextContainer>
            </InfoContainer>

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
                    <DSSubtitle>숙명 유일 프로그래밍 중앙 동아리</DSSubtitle>
                </InfoTextContainer>

                <InfoTextContainer>
                    <SoluxImage />
                    <DSContent>SOLUX는 교내 유일 프로그래밍 중앙동아리로, 다양한 전공의 학우들이 모여 여러 분야와 IT를 융합하고 새로운 IT 기술을 향해 나아갑니다.</DSContent>
                </InfoTextContainer>
            </SoluxInfoContainer>
        </AboutContainer>
        
    );
};

export default AboutPage;
