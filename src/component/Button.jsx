import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';

const MotionButton = styled(motion.button)`
    font-size: 0.8em;
    border-radius: 50px;
    border: 0px;
    cursor: pointer;
    background-color: #0057FF;
    padding: 5px 15px;
    margin-left: 10px;
    color: #FFFFFF;
    font-weight: bold;

    &:hover {
        background: #FFFFFF;
        color: #000000;
    }
`;

const hoverVariants = {
    grow: {
        scale: 1.1,
        transition: { duration: 0.3 },
    },
};

function Button(props) {
    const { title, onClick, disabled, style } = props;

    return (
        <MotionButton
            onClick={onClick}
            style={style}
            variants={hoverVariants}
            whileHover="grow"
            disabled={disabled}
        >
            {title || "지원하기"}
        </MotionButton>
    );
}

export default Button;