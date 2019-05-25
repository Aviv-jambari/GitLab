import React from 'react'
import Navbar from "../navbar/navbar.component";
import Footer from '../footer/footer.component';
import Loader from '../loader/loader.component';
import "./Layout.component.scss";


const Layout = (props) => {
    return (
        <>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
            <Footer />
            <Loader />
        </ >
    )
}
export default Layout;
