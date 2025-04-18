import React from 'react'
import "../register/Register.css"
import ReCAPTCHA from "react-google-recaptcha";
import SocialButton from '../../components/socialButton/SocialButton';
import { useState } from 'react';
import Validation from '../../ultils/validation';
import { checkEmailExists } from '../../Api/userAPI';

const Register = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const [captchaValue, setCaptchaValue] = useState(null);
    const [errors, setErrors] = useState({});

    
   function handleInput(event){
        const { name, value } = event.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: value
          }));

        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (name === "email" && newErrors.email && value !== "") {
              delete newErrors.email;
            }
            if (name === "password" && newErrors.password && value !== "") {
              delete newErrors.password;
            }    
            return newErrors;
          });
    }

    
    async function handleValidation(event) {
        event.preventDefault();
        const validationErrors = Validation(formValues);
       
        const hasInputError = validationErrors.email || validationErrors.password;

        if(!hasInputError){
            try {
                if(!validationErrors.email){
                    const emailExists = await checkEmailExists(formValues.email)
                    if (emailExists) {
                        validationErrors.email = "Account already exists!";
                        setErrors(validationErrors);
                        return;
                      }
                }
            }
            catch{
                console.error("Error checking email:", errors);
                validationErrors.email = "Error checking email. Try again later.";
            }
            
            if (!captchaValue) {
                validationErrors.recaptcha = "Capcha valication failed, try again!";
            } 
        }
        
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Register success!");
          }      
    }
    
    function onChange(value) {
        setCaptchaValue(value); 
    }
      
  return (
        <div className='register-container template d-flex justify-content-center align-items-center vh-100 bg-white'>
            <div className='register-form-container p-4 md-5 rounded bg-white border border-secondary'>
                  <form onSubmit={handleValidation}>
                     <h3 className='text-center'>Register</h3>
                    <div className='mb-3'>
                        <label className='form-label fw-bold my-0 mb-2' htmlFor="email">Email</label>
                        <input 
                        type="email"
                        name="email" 
                        placeholder='Email Address' 
                        className='form-control'
                        value={formValues.email}
                        onChange={handleInput} />
                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                    </div>
                    <div className='mb-3'>
                        <label className='form-label fw-bold my-0 mb-2' htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        name="password"
                        placeholder='Enter your password' 
                        className='form-control'
                        value={formValues.password}
                        onChange={handleInput}
                        />
                        {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                    </div>             
               
                  {/* form check */}  
                    <div class="form-check m-2">
                        <input class="form-check-input" type="checkbox" value="" id="check"/>
                        <label class="form-check-label m-0" for="flexCheckDefault">
                        keep me login in this device
                        </label>
                    </div>
                    {/* capcha */}
                    <ReCAPTCHA
                        className="mt-3"
                        sitekey="6Lef0w0rAAAAANp5oqJzpZPCBL7ryQ_Yjx1h0FuU"
                        onChange={onChange}/>
                        {errors.recaptcha && <p style={{ color: "red" }}>{errors.recaptcha}</p>}
                    <div className="term-of-service mt-3 mb-0 ms-0 me-0">
                        <p className="term-of-service">
                            By register in to your account, you agree to our <a href="#" class="text-primary fw-bold text-decoration-none">Terms of Service </a> 
                            and consent to our <a href="#" class="text-primary fw-bold text-decoration-none">Cookies Police</a> and <a href="#" class="text-primary fw-bold text-decoration-none ">Privacy Policy</a>
                        </p>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-warning fw-bold text-white mt-0'>Register</button>
                    </div>
                    </form>
                  {/* hr */}
                  <div class="d-flex align-items-center m-2">
                        <hr class="flex-grow-1"/>
                        <span class="mx-2 text-muted ">Or</span>
                        <hr class="flex-grow-1"/>
                  </div>
                      {/* button summit */}
                      <SocialButton/>
                  <div class="offer-container w-100 p-1 mt-2">
                        <a href="/ResetPassword" class="text-primary text-decoration-none fw-bold">Forget your password? </a>
                        <span class="text-muted">or</span>
                        <a href="/login" class="text-primary text-decoration-none fw-bold">Login here</a>
                    </div>

            </div>
        </div>
  )
}

export default Register;
