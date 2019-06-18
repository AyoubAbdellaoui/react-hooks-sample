import React from 'react'
import Button from '../commun/Button'
import ClickedText from '../commun/ClickedText'
import { HeaderContainer } from './default'
import Logo from '../../images/LogoSG.png'

const Header = () => {

    return (
        <HeaderContainer>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img alt="" src={Logo} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ClickedText
                    children="S’identifier"
                    uppercase
                    fontWeigh="Bold"
                    handleFocus={() => {
                        alert("S’identifier")
                    }} />
                <Button
                    children="S’inscrire"
                    color="#FFFFFF"
                    background="#E91D3D"
                    padding="18px 40px 18px 40px"
                    fontWeigh="Bold"
                    marginleft={'50px'}
                    handleFocus={() => {
                        alert("S’inscrire")
                    }} />
            </div>
        </HeaderContainer>
    )
}

export default Header