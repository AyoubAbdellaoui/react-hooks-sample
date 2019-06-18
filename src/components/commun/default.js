import styled from 'styled-components'

export const ButtonStyle = styled.button`
  color: ${props => props.color && props.color};
  border-style: solid;
  border-color: #E91D3D;
  outline: none;
  cursor: pointer;
  background: ${props => props.background && props.background};
  padding: ${props => props.padding ? props.padding : 'none'};
  font-family: Avenir;
  font-size: 15px;
  font-weight: ${props => props.fontWeigh ? props.fontWeigh : '500'};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 20;
  display: flex;
  border-radius: 45px;
  text-transform: uppercase;
  margin-bottom: ${props => props.marginbottom ? props.marginbottom : 'none'};
  float: ${props => props.float && props.float};
  margin-left: ${props => props.marginleft && props.marginleft};
  margin-right: ${props => props.marginright && props.marginright};
  position: ${props => props.position ? 'absolute' : 'none'};
  top: ${props => props.top ? '0' : 'none'} ;
  right: ${props => props.right ? '0' : 'none'} ;
  margin: ${props => props.margin ? '7px' : 'none'};
`

export const TextContainer = styled.p`
  text-align: center;
  font-family: Avenir;
  font-size: ${props => props.fontSize ? props.fontSize : '15px'};
  font-weight: ${props => props.fontWeigh ? props.fontWeigh : 'normal'};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 20;
  text-align: center;
  color: #F55871;
  text-transform:  ${props => props.uppercase ? 'uppercase' : 'none'};
  text-decoration: underline;
  cursor: pointer;
`