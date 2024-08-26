import React from "react";
import styled from 'styled-components';

const StyledBox = styled.div`
    border-radius: 15px;
    border: 1px solid #0057FF;
    padding: clamp(1rem, 1.2vw, 1.2rem); 
    flex-direction: column; 
    align-items: flex-start; /* 좌측 정렬 */
    margin-top: 1vw;
    flex-grow: 1; /* 부모 컨테이너의 너비에 맞게 성장 */
    max-width: 55vw; /* 최대 너비 설정 */
    width: 100%;
`

const StyledTitle = styled.div`
    font-weight: 600;
    font-size: clamp(1.2rem, 1.5vw, 1.5rem); /* 최소 0.8rem, 최대 1.2rem 비례 조절 */
    margin-bottom: 0.5rem; /* 제목과 내용 사이 간격 */
`

const List = styled.ul`
    list-style: disc; /* 기본 점 스타일 */
    padding-left: clamp(1.2rem, 1.5rem, 1.5rem); /* 왼쪽 여백을 추가하여 점과 텍스트 사이의 공간 확보 */
    margin: 0; /* 기본 여백 제거 */
`;

const ListItem = styled.li`
    font-size: clamp(0.8rem, 1.5vw, 1.1rem);
    margin-top: 0.7vw;
`;

function Box(props){
    const { title, contents } = props;

    return(
        <StyledBox>
            <StyledTitle>{title}</StyledTitle>
            <List>
                {contents.map((content, index) => (
                    <ListItem key={index}>{content}</ListItem>
                ))}
            </List>
        </StyledBox>
    );
}

export default Box;