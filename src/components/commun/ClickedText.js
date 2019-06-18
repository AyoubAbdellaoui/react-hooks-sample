import React from 'react'
import { TextContainer } from './default.js'

const ClickedText = ({
    children,
    handleFocus,
    uppercase,
    fontSize,
    fontWeigh,
}) => {
    return (
        <TextContainer
            onClick={handleFocus}
            uppercase={uppercase}
            fontSize={fontSize}
            fontWeigh={fontWeigh}
        >
            {children}
        </TextContainer>
    )
}

export default ClickedText