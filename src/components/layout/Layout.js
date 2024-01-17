import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div style={{ marginTop: '0px' }}>

                {/* add all layout here  */}
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout
