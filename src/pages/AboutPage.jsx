import React from "react";
import styled from 'styled-components';
import backgound from "../images/about/round_background.png";
import logo from "../images/logo/about_logo.png"

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
    background-image: url(${backgound});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 150%;
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
    font-size: 3rem;
`

const MainLightText = styled.div`
    font-weight: 100;
    font-size: 1rem;
`

const InfoContainer = styled.div`
    height: 85vh;
    margin-top: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

const InfoImageContainer = styled.div`
    height: 300px;
    display: flex;
`

const InfoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InfoBoldText = styled.div`
    font-weight: 800;
    font-size: 1.3rem;
`

const InfoLightText = styled.div`
    font-weight: 100;
    font-size: 0.8rem;
    width: 400px;
`

const DSTitle = styled.div`
    margin-top: 10vh;
    font-weight: 600;
    font-size: 2.6rem;
    color: #0057FF;
`

const DSSubtitle = styled.div`
    font-weight: 200;
    font-size: 0.6rem;
`

const DSContent = styled.div`
    font-weight: 100;
    font-size: 0.8rem;
    width: 400px;
`

const DacosInfoContainer = styled.div`
    height: 92vh;
`

const SoluxInfoContainer = styled.div`
    height: 73vh;
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
                <InfoImageContainer>
                    <InfoBoldText>이미지1</InfoBoldText>
                    <InfoBoldText>이미지2</InfoBoldText>
                </InfoImageContainer>

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
                    <InfoBoldText>DACOS이미지1</InfoBoldText>
                    <DSContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti ipsum, veniam quia maiores ullam molestiae natus assumenda commodi quasi suscipit! Iste, voluptas sapiente officia possimus minima reprehenderit nemo aperiam.</DSContent>
                </InfoTextContainer>
            </DacosInfoContainer>

            <SoluxInfoContainer>
                <InfoTextContainer>
                    <DSTitle>SOLUX</DSTitle>
                    <DSSubtitle>숙명 유일 프로그래밍 중앙 동아리</DSSubtitle>
                </InfoTextContainer>

                <InfoTextContainer>
                    <InfoBoldText>SOLUX이미지1</InfoBoldText>
                    <DSContent>SOLUX는 교내 유일 프로그래밍 중앙동아리로, 다양한 전공의 학우들이 모여 여러 분야와 IT를 융합하고 새로운 IT 기술을 향해 나아갑니다.</DSContent>
                </InfoTextContainer>
            </SoluxInfoContainer>
        </AboutContainer>
        
    );
};

export default AboutPage;
