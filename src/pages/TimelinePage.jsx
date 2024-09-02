import { React, useState } from "react";
import styled from 'styled-components';
import background from "../images/timeline/process_background.png";
import Button from "../component/Button";
import none from "../images/none.png";
import { useMediaQuery } from 'react-responsive';

const TimelineContainer = styled.div`
    background-color: transparent;
`

const InfoContainer = styled.div`
    height: 90vh;
    width: 100%;
    margin-top: 0;
    margin-bottom: 40px;
    background-image: url(${background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TitleText = styled.div`
    font-size: clamp(1.5rem, 1vw, 1.8rem);
    font-weight: 600;
    background-color: transparent;
`

const GrayTitleText = styled.div`
    font-weight: 600;
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    color: #949494;
    background-color: transparent;
`

const GraySubtitleText = styled.div`
    font-weight: 400;
    width: 100%;
    font-size: clamp(0.6rem, 100vw, 0.8rem);
    color: #949494;
    background-color: transparent;
    margin-top: 20px;
    text-align: center;
    line-height: 140%;
`

const SubtitleText = styled.div`
    font-size: clamp(0.6rem, 2vw, 0.8rem); 
    font-weight: 200;
    color: #B2B2B2;
    background-color: transparent;
`

const PartContainer = styled.div`
    width: 80%;
    background-color: transparent;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center
`

const Part = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TextButtonContainer = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

const TextButton = styled.div`
    width: 80%;
    height: 30px;
    font-size: clamp(1.1rem, 1.5vw, 1.3rem);
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;
    padding-right: 0.5rem;
`

const ContentText = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    font-weight: 400;
    background-color: transparent;
    padding-bottom: 10px;
    width: 90%;
    max-width: 80%;
    text-align: center; 
    margin: 0 auto; 
    box-sizing: border-box; 
    overflow: hidden; 
    align-items: center;
`

const WhiteText = styled.span`
    font-size: clamp(0.8rem, 2vw, 1rem); 
    font-weight: 400;
    background-color: transparent;
`

const BlueText = styled.span`
    color: #0057FF;
    font-size: clamp(0.8rem, 2vw, 1rem);
    font-weight: 400;
    background-color: transparent;
`

const GraySmallSubtitleText = styled.span`
    font-size: clamp(0.6rem, 2vw, 0.7rem);
    font-weight: 200;
    color: #B2B2B2;
    background-color: transparent;
    margin-left: 5px;
`

const TimetableContainer = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TimetableImage = styled.div`
    width: 40vw;
    height: 50vh;
    background-image: url(${none});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 8px;
`;


const TimelinePage = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [isDS, setIsDS] = useState(true);

  const handleClick = (part) => {
    if (part === 'DS' && !isDS) {
      setIsDS(true);
    } else if (part === 'Dev' && isDS) {
      setIsDS(false);
    }
  };

    return (
        <TimelineContainer>
            <InfoContainer>
                <TitleText>지원하기</TitleText>
                <GrayTitleText>APPLY</GrayTitleText>
                <SubtitleText>24. 09. 08 (SUN) 10:00 - 24. 09. 14 (SAT) 23:59</SubtitleText>

                { isMobile &&
                    <>
                        <PartContainer>
                            <TextButtonContainer>
                                <TextButton
                                    onClick={() => handleClick('DS')}
                                    style={{
                                    color: isDS ? "#0057FF" : "#767676",
                                    borderBottom: isDS ? "2px solid #FFFFFF" : "2px solid #767676"
                                    }}
                                    disabled={isDS}
                                >
                                    데이터 분석
                                </TextButton>
                                <TextButton
                                    onClick={() => handleClick('Dev')}
                                    style={{
                                    color: !isDS ? "#0057FF" : "#767676",
                                    borderBottom: !isDS ? "2px solid #FFFFFF" : "2px solid #767676"
                                    }}
                                    disabled={!isDS}
                                >
                                    개발
                                </TextButton>
                            </TextButtonContainer>

                            { isDS && <>
                                <WhiteText style={{ marginTop: "10px", alignSelf: "flex-start"}}>DACOS 2기 부원 및 OB부원</WhiteText>
                                <GraySubtitleText style={{ marginBottom: "50px"}}>
                                    * 5,000원의 참가비가 발생하니, 지원 시 참고해주시기 바랍니다.<br />
                                    * 교차 지원 불가능하며, 외부 인원 지원에 대해선 추후 공지 예정입니다.<br />
                                    * 개발 분야와 데이터 분야 지원 링크가 다르니 유의해서 지원 부탁드립니다.
                                </GraySubtitleText>
                                <Button
                                    onClick={() => {
                                        window.open("https://forms.gle/6KaV4nXxNoFtnS6p7") //다코스 모집 폼 링크
                                    }}
                                    style = {{ height: "40px", width: "100px", alignSelf: "center"}}
                                    >
                                    지원하기
                                </Button>
                            </>
                            }

                            { !isDS && <>
                                <WhiteText style={{ marginTop: "10px", alignSelf: "flex-start"}}>SOLUX 29기 부원 및 OB 부원 중 웹앱 개발 가능자</WhiteText>
                                <GraySubtitleText style={{ marginBottom: "50px"}}>
                                    * 5,000원의 참가비가 발생하니, 지원 시 참고해주시기 바랍니다.<br />
                                    * 교차 지원 불가능하며, 외부 인원 지원에 대해선 추후 공지 예정입니다.<br />
                                    * 개발 분야와 데이터 분야 지원 링크가 다르니 유의해서 지원 부탁드립니다.
                                </GraySubtitleText>

                                <Button
                                    onClick={() => {
                                        window.open("https://forms.gle/1Bt1vyWGVtyYf2SH9") //솔룩스 모집 폼 링크
                                    }}
                                    style = {{ height: "40px", width: "100px"}}
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
                        <Part style={{ marginTop: "10px"}}>
                            <BlueText>데이터 분석</BlueText>   
                            <WhiteText>DACOS 2기 부원 및 OB부원</WhiteText>
                        </Part>
                        <Part style={{ marginTop: "10px"}}>
                            <BlueText>개발</BlueText>
                            <WhiteText>SOLUX 29기 부원 및 OB 부원 중 웹앱 개발 가능자</WhiteText>
                        </Part>
                    </PartContainer>
                    <GraySubtitleText style={{ marginBottom: "50px"}}>
                        * 5,000원의 참가비가 발생하니, 지원 시 참고해주시기 바랍니다.<br />
                        * 교차 지원 불가능하며, 외부 인원 지원에 대해선 추후 공지 예정입니다.<br />
                        * 개발 분야와 데이터 분야 지원 링크가 다르니 유의해서 지원 부탁드립니다.
                    </GraySubtitleText>

                    <Button
                        onClick={() => {
                            window.open("https://linktr.ee/DxSHackathon")
                        }}
                        style = {{ height: "40px", width: "100px"}}
                        >
                        지원하기
                    </Button>
                    </>
                }
                
            </InfoContainer>
            
            <InfoContainer>
                <TitleText>팀 공개</TitleText>
                <GrayTitleText>TEAM REVEAL</GrayTitleText>
                
                <SubtitleText>2024. 10. 31 (THU)</SubtitleText>
                
                <ContentText style={{ marginTop: "60px"}}>
                    <WhiteText>• 참여자 명단 및 오픈채팅방은</WhiteText> <BlueText>9월 20일 공개</BlueText> <WhiteText>됩니다.</WhiteText>
                </ContentText>
                <ContentText>
                    <WhiteText>• 데이터 분석 2명, 프론트엔드 2명, 백엔드 2명으로 구성된 팀이 공개됩니다.</WhiteText> <GraySmallSubtitleText>(세부 인원수 변동 가능)</GraySmallSubtitleText>
                </ContentText>
                <ContentText>
                    <WhiteText>• 구글폼에 기재해주신 연락처를 통해</WhiteText> <BlueText>오픈채팅방 개설 예정</BlueText> <WhiteText>입니다.</WhiteText>
                </ContentText>
                <GraySmallSubtitleText>*팀은 임의로 변경 불가능합니다</GraySmallSubtitleText>
            </InfoContainer>

            <InfoContainer>
                <TitleText>사전준비</TitleText>
                <GrayTitleText>PRE - PREPARATION</GrayTitleText>
                
                <SubtitleText>2024. 11. 01 (FRI) - 24. 11. 07 (THU)</SubtitleText>
                
                <ContentText style={{ marginTop: "60px"}}>
                    <WhiteText>• 일주일간 사전 준비 기간을 거쳐 주제 선정을 비롯한 </WhiteText> <BlueText>기획 및 데이터 준비가 필요</BlueText> <WhiteText>합니다.</WhiteText>
                </ContentText>
                <ContentText>
                    <BlueText>• 백-모델링 연결</BlueText> <WhiteText>을 위한 사전 준비 또한 필요합니다.</WhiteText> <GraySmallSubtitleText>(관련 가이드 제공)</GraySmallSubtitleText>
                </ContentText>
                <ContentText>
                    <WhiteText>• 강의실을 대여해 회의 공간으로 제공할 예정이며, 강의실은 대여 후 공지 예정입니다.</WhiteText>
                </ContentText>

            </InfoContainer>

            <InfoContainer style={{ marginBottom: "20px"}}>
                <TitleText>연합 해커톤 진행</TitleText>
                <GrayTitleText>HACKATHON</GrayTitleText>
                
                <div style={{ display: "flex", alignItems: "center"}}><SubtitleText>2024. 11. 08 (FRI) 10:00 - 24. 11. 09 (SAT) 14:00</SubtitleText> <GraySmallSubtitleText>* 무박 2일 진행</GraySmallSubtitleText></div>
                
                <ContentText style={{ marginTop: "10px"}}>Time table</ContentText>
                <TimetableContainer>
                    <TimetableImage />
                </TimetableContainer>

                <GraySubtitleText style={{ marginTop: "5px"}}>*점심, 저녁, 다음날 아침 및 간단한 간식이 제공됩니다</GraySubtitleText>
            </InfoContainer>
        </TimelineContainer>
    );
};

export default TimelinePage;
