import React, { useState } from "react";
import styled from 'styled-components';
import mailicon from "../images/faq/mail_icon.svg"
import instagramicon from "../images/faq/instagram_icon.svg"

const applyData = [
    {
      question: '솔룩스 부원이기도 하고, 다코스 부원이기도 한데 어느 분야로 지원할 수 있나요?',
      answer: '해당 경우, 원하는 분야로 지원해주시면 됩니다.'
    },
    {
        question: '단체지원이 가능한가요? / 미리 팀을 만들어서 지원해도 되나요?',
        answer: '아니요, 팀 별 지원은 불가능합니다.'
    },
    {
        question: '두 개의 팀에 복수로 참가 지원해도 되나요?',
        answer: '아니요, 데이터분석 또는 개발 중 하나만 선택하여 지원해야 합니다. 또한, 팀 단위가 아닌 개인으로 지원하여 하나의 팀에 배정받기 때문에 두 개의 팀에 복수 배정되지 않습니다.'
    },
    {
        question: '외부 인원이 지원해도 괜찮나요?',
        answer: '상금은 행사 종료 후 한 달 내로 지급될 예정이며, 시기는 변동될 수 있습니다.'
    },
];

const planningData = [
    {
      question: '사전 기획 기간에는 자율적으로 모여서 작업하는 건가요?',
      answer: '네. 또한, 주최 측에서 대면 회의가 가능한 강의실을 제공해드릴 예정이며, 추후 공지드릴 예정입니다.'
    },
];

const preparationData = [
    {
      question: '참가 준비물이 있나요?',
      answer: '개인 노트북과 충전기는 필수로 지참하셔야 하며, 무박으로 진행되기 때문에 기타 필요한 개인 물품들을 준비하시면 됩니다. 또한, 모델의 용량이 큰 경우를 대비해 각자 필요에 따라 하드디스크, USB 등을 준비해주시면 됩니다.'
    },
    {
        question: '유료 API를 사용해도 되나요?',
        answer: '모델 API는 사용이 불가능합니다.'
    },
    {
        question: '사용해야 하는 데이터나 모델이 정해져 있나요?',
        answer: '정해져 있지 않습니다. 팀 별 주제에 따라 적절한 데이터를 자유롭게 사용하여 진행하시면 되며, 데이터에 따라 적합한 모델을 자유롭게 사용할 수 있습니다.'
    },
    {
        question: '모델링 작업이 오래 걸리는 경우 어떻게 해야 하나요?',
        answer: '팀 공개 후 제공되는 사전 기획 기간동안 팀원들과 모여 대회 당일에 시간이 부족하지 않도록 미리 준비하는 것을 권장드립니다.'
    },
];

const progressData = [
    {
        question: '대회 도중 외출이 가능한가요?',
        answer: '네 외출은 자유롭게 가능합니다.'
    },
    {
        question: '개인 일정으로 늦은 참석, 또는 이른 퇴장이 가능한가요?',
        answer: '아니요, 예정되어 있는 시간에는 모두 참여 가능해야합니다. 단, 학교 수업의 경우 지원 시에 작성한 일정에 따라 가능합니다.'
    },
    {
        question: '식사 제공되나요?',
        answer: '네, 점심과 저녁과 다음날 아침 및 소정의 간식이 제공됩니다.'
    },
    {
        question: '심사위원님들은 어떻게 구성되나요?',
        answer: '교내 교수님으로 구성됩니다.'
    },
    {
        question: '심사 결과는 언제 발표되나요?',
        answer: '행사 당일 심사 결과 발표 후, 마지막에 시상이 진행될 예정입니다.'
    },
    {
        question: '상금은 시상식 당일에 지급되나요?',
        answer: '상금은 행사 종료 후 한 달 내로 지급될 예정이며, 구체적인 시기는 변동될 수 있습니다. '
    },
];

const etcData = [
    {
        question: '팀빌딩 기준이 어떻게 되나요?',
        answer: '지원 시 작성한 폼에 따라 실력을 최대한 비슷하게 맞추어 구성할 예정입니다.'
    },
    {
        question: '선발일은 언제인가요? / 참가 합격자 공지는 언제 주나요?',
        answer: 'ㅇㅇㅇ에 오픈채팅방 개설과 함께 참가자 명단이 공개됩니다. 팀 공개일(24. 10. 31)에 팀 명단이 공개되며, 이후 공지는 오픈채팅방을 통해 이루어질 예정입니다. '
    },
];

const Container = styled.div`
`;

const FaqContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
    display: flex; 
    flex-direction: column;
    justify-content: center; /* Vertically centered */
    align-items: center;  /* Center aligned horizontally */
    text-align: left;
`;

const FAQ = styled.div`
    width: clamp(70vw, 1.5vw, 60vw);
    margin: 0 auto;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: baseline;
    background-color: transparent;
    width: clamp(70vw, 1.5vw, 60vw);
`;

const TitleText = styled.div`
    font-size: clamp(1.5rem, 1vw, 1.8rem);
    font-weight: 600;
    background-color: transparent;
`;

const GrayTitleText = styled.div`
    font-weight: 600;
    font-size: clamp(0.6rem, 1vw, 0.8rem);
    color: #949494;
    background-color: transparent;
    margin-left: 5px;
`;

const FAQAnswer = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
`;

const QuestionText = styled.div`
    font-size: clamp(0.9rem, 1.5vw, 1.05rem);
    background-color: transparent;
`

const AnswerText = styled.div`
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    background-color: transparent;
`

// Unified container for both question and answer
const FaqItem = styled.div`
    background-color: rgba(0, 87, 255, 0.1);
    color: #0057FF;
    padding: 20px;
    cursor: pointer;
    border-radius: 15px;
    margin-bottom: 10px;
    border: 1px solid #0057FF;
    transition: all 0.3s ease-in-out;

    &.active {
        background: linear-gradient(135deg, #0057FF 0%, #003499 100%);
        color: white;
    }
    
    &.active ${FAQAnswer} {
        background-color: transparent;
        max-height: 500px;
        padding-top: 20px;
        opacity: 1;
    }
`;

const FaqQuestion = styled.div`
    padding: 1px;
    background-color: transparent;
`;

const InquriryContainer = styled.div`
    display: flex;
    padding-top: 30px;
    height: 30vh;
`

const Part = styled.div`
    flex: 1;
`

const BlueText = styled.div`
    color: #0057FF;
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    font-weight: 400;
    margin-bottom: 5px;
`

const WhiteText = styled.div`
    width: 3rem;
    font-size: clamp(0.5rem, 1.5vw, 0.8rem);
    font-weight: 400;
    background-color: transparent;
`

const InquiryInfoConatiner = styled.div`
    display: flex;
    width: clamp(35vw, 1.5vw, 30vw);
`

const MailIcon = styled.div`
    background-image: url(${mailicon});
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 3px;
    width: clamp(18px, 1.5vw, 22px);
    height: clamp(18px, 1.5vw, 22px);
`

const InstagramIcon = styled.div`
    background-image: url(${instagramicon});
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 3px;
    width: clamp(18px, 1.5vw, 22px);
    height: clamp(18px, 1.5vw, 22px);
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: flex-start; /* 수평 왼쪽 정렬 */
    gap: 1vw;
    margin-top: 1vw;
    margin-bottom: 2.5vw;
    width: 50%;
    max-width: clamp(70vw, 1.5vw, 60vw);
    margin-left: 8vw;
`;

const Button = styled.button`
    padding: 0.6vw 1.5vw;
    font-size: clamp(0.7rem, 1vw, 0.8rem);
    font-weight: 500;
    border-color: #0057FF;
    border-radius: 30px;
    cursor: pointer;
    background-color: ${({ isActive }) => (isActive ? '#0057FF' : 'black')};
    color: ${({ isActive }) => (isActive ? 'white' : 'grey')};
`;


const FaqPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const [selectPart, setSelectPart] = useState('Apply');

    function changePart(newPart){
        if (newPart !== selectPart) {
            setSelectPart(newPart);
        }
    }

    return (
        <Container>

            <FaqContainer>
                <TitleContainer>
                    <TitleText>자주 묻는 질문</TitleText>
                    <GrayTitleText>FAQ</GrayTitleText>
                </TitleContainer>
            </FaqContainer>

            <ButtonContainer>
                <Button isActive={selectPart === 'Apply'}  onClick={() => changePart('Apply')}>
                    지원
                </Button>
                <Button isActive={selectPart === 'Planning'}  onClick={() => changePart('Planning')}>
                    사전기획
                </Button>
                <Button isActive={selectPart === 'Preparation'}  onClick={() => changePart('Preparation')}>
                    해커톤 준비
                </Button>
                <Button isActive={selectPart === 'Progress'}  onClick={() => changePart('Progress')}>
                    해커톤 진행
                </Button>
                <Button isActive={selectPart === 'Etc'}  onClick={() => changePart('Etc')}>
                    기타
                </Button>   
            </ButtonContainer>

            {selectPart === 'Apply' && (
                <>
                    <FAQ> 
                    {applyData.map((item, index) => (
                    <FaqItem
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleToggle(index)} // Click handler on the container
                    >
                    <FaqQuestion>
                        <QuestionText>
                            Q. {item.question}
                        </QuestionText>
                    </FaqQuestion>
                    <FAQAnswer className={activeIndex === index ? 'active' : ''}>
                        <AnswerText>
                            A. {item.answer}
                        </AnswerText>
                    </FAQAnswer>
                    </FaqItem>
                    ))}
                    </FAQ>
                    
                </>
            )}

            {selectPart === 'Planning' && (
                <>
                    <FAQ> 
                    {planningData.map((item, index) => (
                    <FaqItem
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleToggle(index)} // Click handler on the container
                    >
                    <FaqQuestion>
                        <QuestionText>
                            Q. {item.question}
                        </QuestionText>
                    </FaqQuestion>
                    <FAQAnswer className={activeIndex === index ? 'active' : ''}>
                        <AnswerText>
                            A. {item.answer}
                        </AnswerText>
                    </FAQAnswer>
                    </FaqItem>
                    ))}
                    </FAQ>
                    
                </>
            )}

            {selectPart === 'Preparation' && (
                <>
                    <FAQ> 
                    {preparationData.map((item, index) => (
                    <FaqItem
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleToggle(index)} // Click handler on the container
                    >
                    <FaqQuestion>
                        <QuestionText>
                            Q. {item.question}
                        </QuestionText>
                    </FaqQuestion>
                    <FAQAnswer className={activeIndex === index ? 'active' : ''}>
                        <AnswerText>
                            A. {item.answer}
                        </AnswerText>
                    </FAQAnswer>
                    </FaqItem>
                    ))}
                    </FAQ>
                    
                </>
            )}

            {selectPart === 'Progress' && (
                <>
                    <FAQ> 
                    {progressData.map((item, index) => (
                    <FaqItem
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleToggle(index)} // Click handler on the container
                    >
                    <FaqQuestion>
                        <QuestionText>
                            Q. {item.question}
                        </QuestionText>
                    </FaqQuestion>
                    <FAQAnswer className={activeIndex === index ? 'active' : ''}>
                        <AnswerText>
                            A. {item.answer}
                        </AnswerText>
                    </FAQAnswer>
                    </FaqItem>
                    ))}
                    </FAQ>
                    
                </>
            )}

            {selectPart === 'Etc' && (
                <>
                    <FAQ> 
                    {etcData.map((item, index) => (
                    <FaqItem
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleToggle(index)} // Click handler on the container
                    >
                    <FaqQuestion>
                        <QuestionText>
                            Q. {item.question}
                        </QuestionText>
                    </FaqQuestion>
                    <FAQAnswer className={activeIndex === index ? 'active' : ''}>
                        <AnswerText>
                            A. {item.answer}
                        </AnswerText>
                    </FAQAnswer>
                    </FaqItem>
                    ))}
                    </FAQ>
                    
                </>
            )}
            
            
            <FaqContainer>
                <TitleContainer>
                    <TitleText style={{ marginTop: "7vh"}}>문의사항</TitleText>
                    <GrayTitleText>INQUIRY</GrayTitleText>
                </TitleContainer>
                <InquriryContainer>
                    <Part>
                        <BlueText>DACOS</BlueText>
                        <InquiryInfoConatiner>
                            <MailIcon />
                            <WhiteText>smdacos@gmail.com</WhiteText>
                        </InquiryInfoConatiner>
                        <InquiryInfoConatiner> 
                            <InstagramIcon />
                            <WhiteText>@smdacos_oficial</WhiteText>
                        </InquiryInfoConatiner>
                    </Part>
                    <Part>
                        <BlueText>SOLUX</BlueText>
                        <InquiryInfoConatiner>
                            <MailIcon />
                            <WhiteText>sm.solux@gmail.com</WhiteText>
                        </InquiryInfoConatiner>
                        
                        <InquiryInfoConatiner>
                            <InstagramIcon />
                            <WhiteText>@only_solux</WhiteText>
                        </InquiryInfoConatiner>
                    </Part>
                </InquriryContainer>
            </FaqContainer>
        </Container>
    );
};

export default FaqPage;