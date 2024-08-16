import React from "react";
import styled from 'styled-components';
import background from "../images/timeline/process_background.png";
import Button from "../component/Button";

const TimelineContainer = styled.div`
    width: 100%;
    background-color: transparent;
`

const InfoContainer = styled.div`
    height: 90vh;
    width: 100%;
    /* margin-top: 1vh; */
    /* margin-bottom: 6vh; */
    background-image: url(${background});
    background-size: cover;
    background-repeat: repeat;
    background-position: top;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 세로 방향 가운데 정렬 */
    align-items: center; /* 수평 방향 가운데 정렬 */
    text-align: left;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
    background-color: transparent;
    width: 60vw;
`

const TitleText = styled.div`
    font-size: 2.5rem;
    font-weight: 600;
    background-color: transparent;
`

const GrayTitleText = styled.div`
    font-weight: 600;
    color: #949494;
    background-color: transparent;
`

const GraySubtitleText = styled.div`
    font-weight: 400;
    font-size: 0.8rem;
    color: #949494;
    background-color: transparent;
    width: 60vw;
`

const SubtitleText = styled.div`
    font-size: 1rem;
    font-weight: 100;
    background-color: transparent;
    width: 60vw;
`

const PartContainer = styled.div`
    background-color: transparent;
    margin: 40px 0px 20px 0px;
    width: 60vw;
`

const Part = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
`

const BlueText = styled.div`
    color: #0057FF;
    width: 7.5rem;
    font-size: 1rem;
    font-weight: 400;
    background-color: transparent;
`

const WhiteText = styled.div`
    width: 22rem;
    font-size: 0.9rem;
    font-weight: 400;
    background-color: transparent;
`

const TimelinePage = () => {
    return (
        <TimelineContainer>
            <InfoContainer>
                <TitleContainer>
                    <TitleText>지원하기</TitleText>
                    <GrayTitleText>APPLY</GrayTitleText>
                </TitleContainer>
                
                <SubtitleText>24. 09. 08 (SUN) nn:nn -24. 09. 14 (SAT) nn:nn</SubtitleText>
                
                <PartContainer>
                    <Part>
                        <BlueText>데이터 분석</BlueText>   
                        <WhiteText>DACOS 2기 부원 및 OB부원</WhiteText>
                    </Part>
                    
                    <Part>
                        <BlueText>개발</BlueText>
                        <WhiteText>SOLUX 20기 부원 및 OB 부원 중 웹앱 개발 가능자</WhiteText>
                    </Part>
                </PartContainer>
                

                <GraySubtitleText>*교차 지원 불가능하며, 외부 인원 지원에 대해선 추후 공지 예정</GraySubtitleText>

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
