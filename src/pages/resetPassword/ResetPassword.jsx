import React from 'react'
import "./ResetPassword.css"
import { FaApple, FaGoogle, FaFacebook } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

const ResetPassword = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
      }
  return (
    <div className='reset template d-flex justify-content-center align-items-center vh-100 bg-white'>
        <div className='form-container p-4 md-5 rounded bg-white border border-secondary'>
            <form>
            <h3 className='text-center'>Reset Password</h3>
            <div className="reset-password-instruction">
                    <p>Enter your email associated with your account and we will send instruction to reset your password</p>
            </div>       
            <div className='mb-3'>
                    <label className='form-label fw-bold my-0 mb-2' htmlFor="email">Email Address</label>
                    <input 
                    type="email" 
                    placeholder='Email Address' 
                    className='form-control' />
                </div> 
            </form>
            <div className="term-of-service-reset m-3 ms-0 me-0">
                <p className="term-of-service-reset">
                    By register in to your account, you agree to our <a href="#" class="text-primary fw-bold text-decoration-none">Terms of Service </a> 
                    and consent to our <a href="#" class="text-primary fw-bold text-decoration-none">Cookies Police</a> and <a href="#" class="text-primary fw-bold text-decoration-none ">Privacy Policy</a>
                </p>
            </div>
            <div className='d-grid'>
                        <button className='btn btn-warning fw-bold text-white mt-0'>Submit</button>
            </div>
            <div class="reset-container w-100 mt-3">
                <a href="#" class="text-primary text-decoration-none fw-bold">Register</a>
                <span class="text-muted">or</span>
                <a href="#" class="text-primary text-decoration-none fw-bold">Login here</a>
            </div>
        </div>
  </div>
  )
}

export default ResetPassword
