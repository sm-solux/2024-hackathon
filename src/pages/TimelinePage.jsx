import React from "react";
import styled from 'styled-components';
import background from "../images/timeline/process_background.png";
import Button from "../component/Button";
import none from "../images/none.png";

const TimelineContainer = styled.div`
    width: 100%;
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
    justify-content: center; /* 세로 방향 가운데 정렬 */
    align-items: center; /* 수평 방향 가운데 정렬 */
    text-align: left;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
    background-color: transparent;
    width: 50vw;
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
    margin-left: 5px;
`

const GraySubtitleText = styled.div`
    font-weight: 400;
    font-size: 0.8rem;
    color: #949494;
    background-color: transparent;
    width: 50vw;
`

const SubtitleText = styled.div`
    font-size: 1rem;
    font-weight: 100;
    background-color: transparent;
    width: 50vw;
`

const PartContainer = styled.div`
    background-color: transparent;
    margin: 40px 0px 20px 0px;
    width: 50vw;
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

const ContentText = styled.div`
    width: 50vw;
    margin-top: 40px;
    font-size: 0.9rem;
    font-weight: 400;
    background-color: transparent;
`

const TimetableIamge = styled.div`
    width: 25vw;
    height: 250px;
    background-image: url(${none});
    background-size: cover;
    background-repeat: no-repeat;
`

const TimetableContainer = styled.div`
    display: flex;
    width: 50vw;
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
                <TitleContainer>
                    <TitleText>팀 공개</TitleText>
                    <GrayTitleText>TEAM REVEAL</GrayTitleText>
                </TitleContainer>
                
                <SubtitleText>2024. 11. 01 (FRI)</SubtitleText>
                
                <ContentText>데이터 분석 2명, 프론트엔드 2명, 백엔드 2명으로 구성된 팀이 공개됩니다. (세부 인원수 변동 가능)</ContentText>

                <GraySubtitleText>*팀은 임의로 변경 불가능합니다</GraySubtitleText>

            </InfoContainer>

            <InfoContainer>
                <TitleContainer>
                    <TitleText>사전준비</TitleText>
                    <GrayTitleText>PRE - PREPARATION</GrayTitleText>
                </TitleContainer>
                
                <SubtitleText>2024. 11. 01 (FRI) - 24. 11. 07 (THU)</SubtitleText>
                
                <ContentText>일주일간 사전 준비 기간을 거쳐 주제 선정을 비롯한 기획 및 데이터 준비가 필요합니다.<br />강의실을 대여해 회의 공간으로 제공할 예정이며, 강의실은 대여 후 공지 예정입니다.</ContentText>

            </InfoContainer>

            <InfoContainer>
                <TitleContainer>
                    <TitleText>연합 해커톤 진행</TitleText>
                    <GrayTitleText>HACKATHON</GrayTitleText>
                </TitleContainer>
                
                <SubtitleText>2024. 11. 08 (FRI) - 24. 11. 09 (SAT)</SubtitleText>
                
                <ContentText>Time table</ContentText>
                <TimetableContainer>
                    <TimetableIamge />
                    <TimetableIamge />
                </TimetableContainer>

                <ContentText>무박 2일 진행</ContentText>
                <GraySubtitleText>*점심, 저녁 및 간단한 간식이 제공됩니다</GraySubtitleText>

            </InfoContainer>


        </TimelineContainer>
    );
};

export default TimelinePage;
