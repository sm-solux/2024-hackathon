import { React, useState } from "react";
import styled from 'styled-components';
import theme from '../images/hackathon/theme_background.png';
import Box from '../component/Box';
import { useMediaQuery } from 'react-responsive';

const HackathonContainer = styled.div`

`

const ThemeContainer = styled.div`
    height: 75vh;
    width: 100%;
    margin-top: 7vh;
    background-image: ${({ isMobile }) => (isMobile ? 'none' : `url(${theme})`)};
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
    font-size: calc(0.26vw + 27.08px);;
    font-weight: 600;
    background-color: transparent;
    margin-right: 5px;
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
    padding : ${({ isMobile }) => (isMobile ? '0vw 5vw' : '0vw 15vw')};
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
    padding: ${({ isMobile }) => (isMobile ? '0vw 5vw' : '0vw 15vw')};
    display: flex;
    flex-direction: column;
    justify-content: center; /* 세로 방향 가운데 정렬 */
    align-items: center; /* 수평 방향 가운데 정렬 */
    text-align: left;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    width: 100%;
    margin-bottom: 2vw;
`

const TitleText = styled.div`
    font-size: calc(0.26vw + 27.08px);
    font-weight: 600;
    background-color: transparent;
`

const GrayTitleText = styled.div`
    font-weight: 600;
    font-size: calc(0.26vw + 12.08px);
    color: #949494;
    background-color: transparent;
`

const SubtitleText = styled.div`
    font-size: calc(0.26vw + 14.08px);;
    font-weight: 100;
    background-color: transparent;
    width: clamp(70vw, 1.5vw, 60vw);
`

const PrizeBoxContainer = styled.div`
    display: flex;
    margin-top: 1vw;
    width: 100%;
    justify-content: space-between;
`;

const PrizeBox = styled.div`
    width: 30%;
    aspect-ratio: 1.1;
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
    font-size: calc(0.26vw + 14.08px);
    background-color: transparent;
`;

const PrizeMoney = styled.div`
    font-weight: 200;
    font-size: calc(0.26vw + 14.08px); 
    margin-top: clamp(0.3rem, 0.5rem, 0.5rem);
    background-color: transparent;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: center; 
    gap: 1vw;
    margin: 2rem 0;
    width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
`;

const Button = styled.button`
    padding: clamp(0.5rem, 0.7vw, 0.7rem) clamp(1.1rem, 1.6vw, 1.6rem);
    font-size: calc(0.26vw + 14.08px);
    font-weight: 500;
    border-color: #0057FF;
    border-radius: 30px;
    cursor: pointer;
    background-color: ${({ isActive }) => (isActive ? '#0057FF' : 'black')};
    color: ${({ isActive }) => (isActive ? 'white' : 'grey')};
    white-space: nowrap;

    &:hover{
        background-color: ${({ isActive }) => (isActive ? 'white' : 'transparent')} ;
        color:${({ isActive }) => (isActive ? 'black' : 'white')} ;
    }
`;

const HackathonPage = () => {

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [selectPart, setSelectPart] = useState('DS');

    function changePart(newPart){
        if (newPart !== selectPart) {
            setSelectPart(newPart);
        }
    }


    return (
        <HackathonContainer>
            <ThemeContainer isMobile={isMobile}>
                <ThemeTitleContainer>
                    <ThemeText>주제</ThemeText>
                    <GrayTitleText>THEME</GrayTitleText>
                </ThemeTitleContainer>
                <SubtitleText>자율 주제로 진행됩니다. 참신한 아이디어와 실용적인 기획을 펼쳐주세요.</SubtitleText>  
            </ThemeContainer>
            
            <EvaluationContainer isMobile={isMobile}>
                <TitleContainer>
                    <TitleText>심사 기준</TitleText>
                    <GrayTitleText>EVALUATION CRITERIA</GrayTitleText>              
                </TitleContainer>

                <ButtonContainer isMobile={isMobile}>
                    <Button isActive={selectPart === 'DS'}  onClick={() => changePart('DS')}>
                        데이터 분석 (35점)
                    </Button>
                    <Button isActive={selectPart === 'Develop'}  onClick={() => changePart('Develop')}>
                        개발 (60점)
                    </Button>
                    <Button isActive={selectPart === 'Presentation'}  onClick={() => changePart('Presentation')}>
                        발표 (5점)
                    </Button>
                </ButtonContainer>

                {selectPart === 'DS' && (
                    <>
                    <Box
                        title='분석 적합성'
                        point='(10점)'
                        contents={[
                            '적절한 데이터셋을 활용했는가',
                            '목적에 맞는 데이터 전처리를 했는가'
                        ]}
                    />
                    <Box
                        title='기술성'
                        point='(20점)'
                        contents={[
                            '주제에 맞는 모델링을 잘 활용했는가',
                            '모델링 기술을 통해 주장을 뒷받침 하였는가'
                        ]}
                    />
                    <Box
                        title='아이디어'
                        point='(5점)'
                        contents={[
                            '창의성과 독창성을 잘 발휘하였는가'
                        ]}
                    />
                    
                </>
                    
                )}

                {selectPart === 'Develop' && (
                    
                    <>
                        <Box
                            title='실용성'
                            point='(10점)'
                            contents={[
                                '실생활에서의 활용이 가능한가'
                            ]}
                        />
                        <Box
                            title='완성도'
                            point='(25점)'
                            contents={[
                                '서비스가 원활하게 작동하는가 (서버 연결)',
                                'UIUX가 사용자 친화적인가'
                            ]}
                        />
                        <Box
                            title='SW 구현'
                            point='(25점)'
                            contents={[
                                'SW를 구현하였는가 (구현하지 못할 경우 실격)',
                                '데이터 시각화까지 포함하여 구현하였는가'
                            ]}
                        />                        
                    </>
                )}

                {selectPart === 'Presentation' && (
                    <>
                    <Box
                        title='프레젠테이션'
                        point='(5점)'
                        contents={[
                            '발표 구성 및 전달력이 논리적인가'
                        ]}
                    />                    
                </>

                )}


            </EvaluationContainer>
            
            <PrizeContainer isMobile={isMobile}>
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
