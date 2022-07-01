import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { NoFoundScreen } from "../components/ui/NoFoundScreen";
import { DasboardScreen } from "../components/ui/DasboardScreen";
import { ForgotPasswordScreen } from "../components/auth/ForgotPasswordScreen";
import { startChecking } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";


export const AppRouter = () => {

  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  useEffect(async() => {
    
    dispatch( startChecking() );
  
  }, [dispatch])

  return (
    <Router>
        <div>        
            <Routes >
                <PublicRoute 
                    exact 
                    path="/auth/login" 
                    component = { LoginScreen } 
                    isAuthenticated = { !!token }
                />
                <Route exact path="/auth/register" component = { RegisterScreen } />
                <Route exact path="/auth/forgot-password" component = { ForgotPasswordScreen } />
                <Route exact path="/no-found" component = { NoFoundScreen } />
                <PrivateRoute 
                    exact 
                    path="/dashboard" 
                    component = { DasboardScreen } 
                    isAuthenticated = { !!token }
                />
                <PrivateRoute 
                    exact 
                    path="/products/category-products" 
                    component = { DasboardScreen } 
                    isAuthenticated = { !!token }
                />  
                <Navigate to="/no-found" />
            </Routes >
        </div>
    </Router>
  );
}