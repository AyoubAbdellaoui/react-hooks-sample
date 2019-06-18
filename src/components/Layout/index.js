import React from 'react'
import PropTypes from 'prop-types'
// import Header from './Header'
// import Footer from './Footer'
import Header from './Header'
import { MainContainer } from './default'
// import './layout.css'

const Layout = ({ children, size }) => (
    <div>
        {/* <Header /> */}
        <Header />
        <MainContainer>
            <div className="back" />
            <main style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</main>
        </MainContainer>
    </div>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
