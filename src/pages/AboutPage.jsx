import React from "react";
import styled from 'styled-components';
import backgound from "../images/about_round_background.png";
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

const WhiteText = styled.div`
    color: #FFFFFF;
`

const BlueText = styled.div`
    color: #0057FF;
`

const BoldText = styled.div`
    font-weight: bolder;
    font-size: 3rem;
`

const LightText = styled.div`
    font-weight: lighter;
    font-size: 1rem;
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

const HacktathonInfoContainer = styled.div`
    height: 92vh;
    margin-top: 53vh;
`

const DacosInfoContainer = styled.div`
    height: 92vh;
    margin-top: 8vh;
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
                    <BoldText>연합해커톤</BoldText>
                    <LightText>SOOKMYUNG WOMEN'S UNIVERSITY</LightText>
                </MainConatiner>
                

                <RoundBackground/> 
            </LogoContainer>

            <HacktathonInfoContainer>
                <BlueText>해커톤</BlueText>

            </HacktathonInfoContainer>

            <DacosInfoContainer>
                <BlueText>Dacos</BlueText>

            </DacosInfoContainer>

            <SoluxInfoContainer>
                <WhiteText>Solux</WhiteText>
            </SoluxInfoContainer>
        </AboutContainer>
        
    );
};

export default AboutPage;
