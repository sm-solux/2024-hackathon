import React from "react";
import styled from "styled-components";
// import { motion } from 'framer-motion';

// const StyleButton = styled(motion.button)`
const StyleButton = styled.button `
    font-size: 0.8em;
    border-radius: 50px;
    border: 0px;
    cursor: pointer;
    background-color: #0057FF;
    padding: 5px 10px;
    margin: 5px 0px;
`
const hoverVariants = {
    grow: {
      scale: 1.1
    },
};

function Button(props){
    const { title, onClick, disabled, style } = props;

    return(
        <StyleButton onClick={onClick} style = { style }
        animate={["initial"]}
        whileHover={["grow"]} variants={hoverVariants} disabled={disabled}>
            { title || "지원하기"}
        </StyleButton>
    );
}

export default Button;