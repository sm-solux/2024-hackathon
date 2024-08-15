import React from "react";
import styled from 'styled-components';
import background from "../images/timeline/process_background.png";
import Button from "../component/Button";

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
`

const InfoContainer = styled.div`
    height: 90vh;
    width: 100%;
    margin-top: 1vh;
    margin-bottom: 6vh;
    background-image: url(${background});
    background-size: cover;
    background-repeat: repeat;
    background-position: top;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
    background-color: transparent;
`

const TitleText = styled.div`
    font-size: 3em;
    font-weight: bold;
    background-color: transparent;
`

const SubtitleText = styled.div`
    font-size: 1em;
    font-weight: lighter;
    background-color: transparent;
`

const PartContainer = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
`

const BlueText = styled.div`
    color: #0057FF;
    background-color: transparent;
`

const WhiteText = styled.div`
    font-size: 1.3em;
    font-weight: normal;
    background-color: transparent;
`

const TimelinePage = () => {
    return (
        <TimelineContainer>
            <InfoContainer>
                <TitleContainer>
                    <TitleText>지원하기</TitleText>
                    <SubtitleText>APPLY</SubtitleText>
                </TitleContainer>
                
                <SubtitleText>24. 09. 08 (SUN) nn:nn -24. 09. 14 (SAT) nn:nn</SubtitleText>

                <PartContainer>
                    <BlueText>데이터 분석</BlueText>   
                    <WhiteText>DACOS 2기 부원 및 OB부원</WhiteText>
                </PartContainer>

                <PartContainer>
                    <BlueText>개발</BlueText>
                    <WhiteText>SOLUX 20기 부원 및 OB 부원 중 웹앱 개발 가능자</WhiteText>
                </PartContainer>

                <SubtitleText>*교차 지원 불가능하며, 외부 인원 지원에 대해선 추후 공지 예정</SubtitleText>

                <Button
                    onClick={() => {
                        window.open("https://solux.tistory.com/")
                    }}
                    >
                    지원하기
                </Button>
            </InfoContainer>
            
            <InfoContainer>
                <TitleText>팀 공개</TitleText>
            </InfoContainer>
        </TimelineContainer>
    );
};

export default TimelinePage;
