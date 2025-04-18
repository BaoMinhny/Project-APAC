import React from 'react'
import "../login/login.css"
import SocialButton from '../../components/socialButton/SocialButton';

const Login = () => {
  return (
    <div className='login-container template d-flex justify-content-center align-items-center vh-100 bg-white'>
      <div className='form-container p-4 md-5 rounded bg-white border border-secondary'>
            <form>
            <h3 className='text-center'>Login</h3>
                <div className='mb-3'>
                    <label className='form-label fw-bold mb-2' htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    placeholder='Email Address' 
                    className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label fw-bold mb-2' htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    placeholder='Enter your password' 
                    className='form-control'
                    />
                </div>             
            </form>
            {/* form check */}  
              <div class="form-check m-2">
                  <input class="form-check-input" type="checkbox" value="" id="check"/>
                  <label class="form-check-label m-0" for="flexCheckDefault">
                  keep me login in this device
                  </label>
              </div>
              {/* sign in button */}
              <div className='d-grid mt-3'>
                      <button className='btn btn-warning rounded-3 btn-box-shadow fw-bold text-white m-0'>Sign in</button>
              </div>
            {/* hr */}
            <div class="d-flex align-items-center m-2">
                      <hr class="flex-grow-1"/>
                      <span class="mx-2 text-muted ">Or</span>
                      <hr class="flex-grow-1"/>
            </div>
                {/* Social summit */}
                <SocialButton/>
            <div class="offer-container w-100 p-1 mt-2">
                    <a href="/ResetPassword" class="text-primary text-decoration-none fw-bold">Forget your password </a>
                    <span class="text-muted">or</span>
                    <a href="/Register" class="text-primary text-decoration-none fw-bold ">Register here</a>
              </div>

              <hr className='w-100'/>
              <p className="term-of-service mb-0">
                    By logging in to your account, you agree to our <a href="#" class="text-primary fw-bold text-decoration-none">Terms of Service </a> 
                    and consent to our <a href="#" class="text-primary fw-bold text-decoration-none">Cookies Police</a> and <a href="#" class="text-primary fw-bold text-decoration-none ">Privacy Policy</a>
              </p>
              
      </div>      
    </div>
  )
}

export default Login
