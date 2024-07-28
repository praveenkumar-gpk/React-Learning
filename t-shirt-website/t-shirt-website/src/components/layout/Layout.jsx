import React from 'react';
import Footer from '../footer/Footer';
import Nav from '../navbar/Navbar'

const Layout = (props) => {
    return (
        
        <div>
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;