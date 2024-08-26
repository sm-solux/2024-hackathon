import { React, useState } from "react";
import styled from 'styled-components';
import background from "../images/timeline/process_background.png";
import Button from "../component/Button";
import none from "../images/none.png";
import { useMediaQuery } from 'react-responsive';

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
    justify-content: center;
    align-items: center;
    text-align: left;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
    background-color: transparent;
    width: 55vw;
`

const TitleText = styled.div`
    font-size: clamp(1.4rem, 1vw, 1.6rem);
    font-weight: 600;
    background-color: transparent;
`

const GrayTitleText = styled.div`
    font-weight: 600;
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    color: #949494;
    background-color: transparent;
    margin-left: 5px;
`

const GraySubtitleText = styled.div`
    font-weight: 400;
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    color: #949494;
    background-color: transparent;
    width: 55vw;
`

const SubtitleText = styled.div`
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    font-weight: 100;
    background-color: transparent;
    width: 55vw;
`

const PartContainer = styled.div`
    background-color: transparent;
    margin: 40px 0px 20px 0px;
    width: 55vw;
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

const TextButton = styled.div`
    width: 10rem;
    height: 30px;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    font-weight: 400;
    background-color: transparent;
    cursor: pointer;
    padding-right: 0.5rem;
`

const WhiteText = styled.div`
    width: 55vw;
    font-size: 0.9rem;
    font-weight: 400;
    background-color: transparent;
`

const ContentText = styled.div`
    width: 55vw;
    margin-top: 30px;
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    font-weight: 400;
    background-color: transparent;
`

const TimetableIamge = styled.div`
    width: 27.5vw;
    height: 250px;
    background-image: url(${none});
    background-size: cover;
    background-repeat: no-repeat;
`

const TimetableContainer = styled.div`
    display: flex;
    width: 55vw;
`

const TimelinePage = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [isDS, setIsDS] = useState(true);

    function changePart(){
        setIsDS(!isDS);
    }

    return (
        <TimelineContainer>
            <InfoContainer>
                <TitleContainer>
                    <TitleText>지원하기</TitleText>
                    <GrayTitleText>APPLY</GrayTitleText>
                </TitleContainer>
                <SubtitleText>24. 09. 08 (SUN) nn:nn -24. 09. 14 (SAT) nn:nn</SubtitleText>

                { isMobile &&
                    <>
                        <PartContainer>
                            <Part>
                            
                                <TextButton 
                                onClick={changePart}
                                style={{ color: isDS ? "#0057FF" : "#767676",
                                    borderBottom: isDS? "1px solid #FFFFFF" : "1px solid #767676"}}>데이터 분석</TextButton>
                                <TextButton
                                onClick={changePart}
                                style={{ color: !isDS ? "#0057FF" : "#767676",
                                    borderBottom: !isDS? "1px solid #FFFFFF" : "1px solid #767676"}}>개발</TextButton>
                            </Part>

                            { isDS && <>
                                <WhiteText style={{ marginTop: "10px"}}>DACOS 2기 부원 및 OB부원</WhiteText>
                                <GraySubtitleText style={{ marginBottom: "50px"}}>*교차 지원 불가능하며, 외부 인원 지원에 대해선 추후 공지 예정</GraySubtitleText>

                                <Button
                                    onClick={() => {
                                        window.open("https://linktr.ee/DxSHackathon") //다코스 모집 폼 링크
                                    }}
                                    style = {{ height: "35px", width: "100px"}}
                                    >
                                    지원하기
                                </Button>
                            </>
                            }

                            { !isDS && <>
                                <WhiteText style={{ marginTop: "10px"}}>SOLUX 20기 부원 및 OB 부원 중 웹앱 개발 가능자</WhiteText>
                                <GraySubtitleText style={{ marginBottom: "50px"}}>*교차 지원 불가능하며, 외부 인원 지원에 대해선 추후 공지 예정</GraySubtitleText>

                                <Button
                                    onClick={() => {
                                        window.open("https://linktr.ee/DxSHackathon") //솔룩스 모집 폼 링크
                                    }}
                                    style = {{ height: "35px", width: "100px"}}
                                    >
                                    지원하기
                                </Button>
                            </>
                            }
                        </PartContainer>
                    </>
                }
                
                { !isMobile && 
                    <>
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
                    

                    <GraySubtitleText style={{ marginBottom: "50px"}}>*교차 지원 불가능하며, 외부 인원 지원에 대해선 추후 공지 예정</GraySubtitleText>

                    <Button
                        onClick={() => {
                            window.open("https://solux.tistory.com/")
                        }}
                        style = {{ height: "40px", width: "100px"}}
                        >
                        지원하기
                    </Button>
                    </>
                }
                
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

                <ContentText style={{ marginTop: "10px"}}>무박 2일 진행</ContentText>
                <GraySubtitleText>*점심, 저녁 및 간단한 간식이 제공됩니다</GraySubtitleText>

            </InfoContainer>


        </TimelineContainer>
    );
};

export default TimelinePage;
