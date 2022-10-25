import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router";



const HomePage = () => {
return(
    <div className={'wrapper'}>
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
)
}

export default HomePage