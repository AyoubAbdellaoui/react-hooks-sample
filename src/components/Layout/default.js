import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: calc(100vh - 90px);
    flex: 1 0 auto;
    // background: #F7F9FA;

    .back {
        background: blue;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
        background-color: #f5f5f5;
        z-index: -1;
    }
`

export const HeaderContainer = styled.div`
  display: flex;
  padding: 18px 108px 17px 100px;
  background-color: #FFFFFF;
  justify-content: space-between;
  box-shadow: 0 10px 3px -3px rgba(165, 175, 186, 0.16);
`

