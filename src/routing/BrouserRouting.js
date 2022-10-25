import React from "react";
import About from "../components/About";
import ContactPage from "../components/ContactPage";
import Home from "../components/Home";
import HomePage from "../components/HomePage";

import {BrowserRouter, Route, Routes} from "react-router-dom";

const BrouserRouting = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}>
                        <Route path='/Home' element={<Home/>}/>
                        <Route path='/About' element={<About/>}/>
                        <Route path='/Contact' element={<ContactPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default BrouserRouting