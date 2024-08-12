import React from "react";
import styled from 'styled-components';
import backgound from "../images/round_background.png";

const Container = styled.div`
    height: 92vh;
`

const TextConatiner = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const WhiteText = styled.div`
    color: #FFFFFF;
`

const BlueText = styled.div`
    color: #0057FF;
`

const LightText = styled.div`
    font-weight: lighter;
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
    height: 52ch;
    border: none;
`

const AboutPage = () => {
    return (
        <Container>
            <TextConatiner>
                <WhiteText>DACOS X SOLUX</WhiteText>
                <BlueText>HACKATHON</BlueText>
                <WhiteText>연합해커톤</WhiteText>
                <LightText>SOOKMYUNG WOMEN'S UNIVERSITY</LightText>
            </TextConatiner>
            

            <RoundBackground/>
            
        </Container>
    );
};

export default AboutPage;
