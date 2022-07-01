import React from 'react';
import {
  Routes ,
  Route,
  Redirect
} from "react-router-dom";

import { Header } from './Header';
import { NavBar } from './NavBar';
import { NavBarMobile } from './NavBarMobile';
import { Footer } from './Footer';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { useSelector } from 'react-redux';

export const DasboardScreen = () => {

    const { token } = useSelector(state => state.auth);

    return (
        <>
            
            <Header />
            <NavBar />
            <NavBarMobile />
            
            <div className="notika-status-area">
                <div className="container">
                    <div className="row">
                        <div>
                            <Routes >
                                <Route exact path="/products"></Route>
                            </Routes >
                        </div>
                    </div>
                </div>
            </div> 
            
            <Footer />
        </>
    )
}