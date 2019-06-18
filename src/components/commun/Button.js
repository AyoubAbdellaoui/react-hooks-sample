import React from 'react'
import { ButtonStyle } from './default.js'

const Button = ({
    children,
    color,
    background,
    marginleft,
    marginright,
    marginbottom,
    handleFocus,
    float,
    fontWeigh,
    padding,
    center,
    submit,
    disabled,
}) => {
    return (
        <ButtonStyle
            color={color}
            background={background}
            marginleft={marginleft}
            marginright={marginright}
            onClick={handleFocus}
            float={float}
            center={center}
            padding={padding}
            fontWeigh={fontWeigh}
            marginbottom={marginbottom}
            disabled={disabled}
            type={submit && 'submit'}
        >
            {children}
        </ButtonStyle>
    )
}

export default Button