import React from 'react';
import '../header/header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
      <div class="navbar navbar-expand-lg navbar-light bg-white p-2">
            <div className="logo-container d-flex flex-row pe-3 ms-5">   
                <div className=" me-2" >
                  <img src="/images/Logo.png"
                  style={{ width: "60px", height: "50px" }}/>
                </div>
                  <span className=" d-flex align-items-center fw-bold fs-4">Co.</span>
            </div> 
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto ms-2">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Find Asset</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Find Catalog</a>
                </li>
            </ul>   
            <div className="login-btn-container me-5">
                <button class="btn my-2 my-sm-0 me-2 " onClick={() => navigate('/Login')}>Login</button>
            </div>
          
      </div>  
  </div>
  );
};

export default Header;