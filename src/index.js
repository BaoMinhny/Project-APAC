import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login/Login';
import Register from '../src/pages/register/Register'
import ResetPassword from './pages/resetPassword/ResetPassword';
import Header from './components/header/header';
import SearchScreen from './pages/searchScreen/SearchScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Router>
        <Routes>
            <Route path="/" element={<SearchScreen />}/>
            <Route path="/ResetPassword" element={<ResetPassword />}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/Login" element={<Login />}/>
        </Routes>
    </Router>

  
);
