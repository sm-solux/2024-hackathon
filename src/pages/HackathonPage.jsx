import { React, useState } from "react";
import styled from 'styled-components';
import theme from '../images/hackathon/theme_background.png';
import Box from '../component/Box';
//import { useMediaQuery } from 'react-responsive';

const HackathonContainer = styled.div`

`

const ThemeContainer = styled.div`
    height: 75vh;
    width: 100%;
    margin-top: 7vh;
    background-image: url(${theme});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    background-position: top;
    flex-direction: column;
    justify-content: center; /* 세로 방향 가운데 정렬 */
    align-items: center; /* 수평 방향 가운데 정렬 */
    text-align: center;
`
const ThemeText = styled.div`
    font-size: 2.5rem;
    font-weight: 600;
    background-color: transparent;
`
const ThemeTitleContainer = styled.div`
    display: flex;
    align-items: baseline; 
    justify-content: center; 
    background-color: transparent;
`

const EvaluationContainer = styled.div`
    height: auto;
    width: 100%;
    margin-top: 10vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 세로 방향 가운데 정렬 */
    align-items: center; /* 수평 방향 가운데 정렬 */
    text-align: left;
`

const PrizeContainer = styled.div`
    height: 75vh;
    width: 100%;
    margin-top: 10vh;
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
    width: 55vw;
`

const TitleText = styled.div`
    font-size: clamp(1.35rem, 1vw, 1.5rem);
    font-weight: 600;
    background-color: transparent;
`

const GrayTitleText = styled.div`
    font-weight: 600;
    font-size: clamp(0.7rem, 1.5vw, 0.8rem);
    color: #949494;
    background-color: transparent;
    margin-left: 5px;
`

const SubtitleText = styled.div`
    font-size: 1rem;
    font-weight: 100;
    background-color: transparent;
    width: 55vw;
`

const PrizeBoxContainer = styled.div`
    display: flex;
    margin-top: 1vw;
    width: 55vw;
    justify-content: space-between;
`;

const PrizeBox = styled.div`
    width: 30%;
    height: 15vw;
    border: 1px solid #0057FF;
    background-color: ${({ opacity }) => `rgba(0, 87, 255, ${opacity})`};
    display: flex;
    justify-content: center;
    flex-direction: column; 
    align-items: center;
    text-align: center;
    border-radius: 15px; 
`;

const PrizeTitle = styled.div`
    font-weight: 500;
    font-size: clamp(0.8rem, 2vw, 1.2rem); /* 최소 1rem, 최대 1.4rem 비례 조절 */
    background-color: transparent;
`;

const PrizeMoney = styled.div`
    font-weight: 200; 
    font-size: clamp(0.6rem, 2vw, 0.9rem); /* 최소 0.8rem, 최대 1.2rem 비례 조절 */
    margin-top: 0.5rem;
    background-color: transparent;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: flex-start; /* 수평 왼쪽 정렬 */
    gap: 1vw;
    margin-top: 1vw;
    margin-bottom: 2.5vw;
    width: 100%;
    max-width: 55vw;
`;

const Button = styled.button`
    padding: 0.6vw 1.5vw;
    font-size: clamp(0.8rem, 1vw, 0.9rem);
    font-weight: 500;
    border-color: #0057FF;
    border-radius: 30px;
    cursor: pointer;
    background-color: ${({ isActive }) => (isActive ? '#0057FF' : 'black')};
    color: ${({ isActive }) => (isActive ? 'white' : 'grey')};
`;

const HackathonPage = () => {

    //const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [isDS, setIsDS] = useState(true);

    function changePart(newPart){
        if (newPart !== isDS) {
            setIsDS(newPart);
        }
    }


    return (
        <HackathonContainer>
            <ThemeContainer>
                <ThemeTitleContainer>
                    <ThemeText>주제</ThemeText>
                    <GrayTitleText>THEME</GrayTitleText>
                </ThemeTitleContainer>
                <SubtitleText>자율주제로 진행됩니다. 추후에 설명 한줄 더 추가될 수 있습니다.</SubtitleText>  
            </ThemeContainer>
            
            <EvaluationContainer>
                <TitleContainer>
                    <TitleText>심사 기준</TitleText>
                    <GrayTitleText>EVALUATION CRITERIA</GrayTitleText>              
                </TitleContainer>

                <ButtonContainer>
                    <Button isActive={isDS}  onClick={() => changePart(true)}>
                        데이터 분석 (30점)
                    </Button>
                    <Button isActive={!isDS}  onClick={() => changePart(false)}>
                        개발 (70점)
                    </Button>
                </ButtonContainer>

                {isDS ? (
                    <>
                    <Box
                        title='실용성 (10점)'
                        contents={[
                            '실생활에서의 활용이 가능한가?'
                        ]}
                    />
                    <Box
                        title='실용성 (10점)'
                        contents={[
                            '실생활에서의 활용이 가능한가?'
                        ]}
                    />
                    <Box
                        title='실용성 (10점)'
                        contents={[
                            '실생활에서의 활용이 가능한가?'
                        ]}
                    />
                    
                </>
                    
                ) : (
                    
                    <>
                        <Box
                            title='실용성 (10점)'
                            contents={[
                                '실생활에서의 활용이 가능한가?'
                            ]}
                        />
                        <Box
                            title='프레젠테이션 (10점)'
                            contents={[
                                '발표 구성 및 전달력이 논리적인가?'
                            ]}
                        />
                        <Box
                            title='기술성'
                            contents={[
                                '서비스가 원활하게 작동하는가?',
                                'UIUX가 사용자 친화적인가?',
                                'SW를 구현하였는가? (구현하지 못할 경우 실격)',
                                '데이터 시각화까지 포함하여 구현하였는가?'
                            ]}
                        />
                        
                    </>
                )}


            </EvaluationContainer>
            
            <PrizeContainer>
                <TitleContainer>
                    <TitleText>상금</TitleText>
                    <GrayTitleText>PRIZE</GrayTitleText>
                </TitleContainer>
                <PrizeBoxContainer>
                    <PrizeBox opacity={0.2}>
                        <PrizeTitle>우수상</PrizeTitle>
                        <PrizeMoney>20만원</PrizeMoney>
                    </PrizeBox>
                    <PrizeBox opacity={0.5}>
                        <PrizeTitle>최우수상</PrizeTitle>
                        <PrizeMoney>30만원</PrizeMoney>
                    </PrizeBox>
                    <PrizeBox opacity={1}>
                        <PrizeTitle>대상</PrizeTitle>
                        <PrizeMoney>50만원</PrizeMoney>
                    </PrizeBox>
                </PrizeBoxContainer>
            </PrizeContainer>
        </HackathonContainer>
    );
};

export default HackathonPage;
