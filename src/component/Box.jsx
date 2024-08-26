import React from "react";
import styled from 'styled-components';

const StyledBox = styled.div`
    border-radius: 15px;
    border: 1px solid #0057FF;
    padding: clamp(1rem, 1.2vw, 1.2rem); 
    flex-direction: column; 
    align-items: flex-start;
    margin-top: 1vw;
    flex-grow: 1;
    max-width: 55vw;
    width: 100%;
`

const StyledTitle = styled.div`
    font-weight: 600;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    margin-bottom: 0.5rem;
`

const List = styled.ul`
    list-style: disc; /* 기본 점 스타일 */
    padding-left: clamp(1.2rem, 1.5rem, 1.5rem); /* 왼쪽 여백을 추가하여 점과 텍스트 사이의 공간 확보 */
    margin: 0; /* 기본 여백 제거 */
`;

const ListItem = styled.li`
    font-size: clamp(0.8rem, 1.5vw, 1rem);
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