import React from 'react'
import "./ResetPassword.css"
import { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ResetPassword = () => {

    const [formValues, setFormValues] = useState({
        email: "",
      });
    const location = useLocation();

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [maskedEmail, setMaskedEmail]  = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (location.state?.toastMessage) {
            toast.error(location.state.toastMessage);
            console.log(location.state)
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
         }
        }, [location.state]);

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
            return newErrors;
          });
        }   


    async function handleValidation(event) {
        event.preventDefault();
        // const validationErrors = Validation(formValues);

        // if(Object.keys(validationErrors).length > 0){
        //    setErrors(validationErrors);
        //     return;   
        // }  
        // setErrors({});
        setIsLoading(true)
        const response = await forgotPassword(formValues.email);
        setIsLoading(false)
        if (response.success) {
            const masked = maskEmail(formValues.email);
            setMaskedEmail(masked);
            setIsSubmitted(true)
        } else {    
          setErrors({ email: response.message });
        }
    

        // if (Object.keys(validationErrors).length === 0) {
        //     alert("Register success!");
        //   }      
    }
    
    
     async function forgotPassword(email) {
        try {
            const res = await fetch("http://localhost:3001/auth/forgot-password" ,{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({email})

                
            });
            if(!res.ok){
                const errorData = await res.json();
                return {success: false, message: errorData.message || "failed to send reset email"}
            }

            const data = await res.json();
            return { success: true, message: data.message || "Reset email sent successfully" };
        } catch (error) {
            console.error("API error:", error);
            return { success: false, message: "Network error" };
        }
    }

   
        function maskEmail(email) {
        const [user, domain] = email.split("@");

        let maskedUser = "";
        if (user.length <= 2) {
            maskedUser = user[0] + "*";
        } else {
            maskedUser = user[0] + "*".repeat(user.length - 2) + user[user.length - 1];
        }

        let maskedDomain = "";
        const domainParts = domain.split(".");
        if (domainParts.length >= 2) {
            maskedDomain = domainParts[0][0] + "****" + "." + domainParts[1][0] + "****";
        } else {
            maskedDomain = domain[0] + "****";
        }

        return `${maskedUser}@${maskedDomain}`;
    }
 
  return (
    <div className='reset template d-flex justify-content-center align-items-center py-3 m-3 bg-white' style={{ minHeight: 'calc(100vh - 116px)' }}>
        <div className='form-container p-4 md-5 rounded bg-white border border-secondary'>
            <Toaster position="top-center" reverseOrder={false} />
            {!isSubmitted ? (
                 <form onSubmit={handleValidation}>
                 <h3 className='text-center'>Reset Password</h3>
                 <div className="reset-password-instruction">
                         <p>Enter your email associated with your account and we will send instruction to reset your password</p>
                 </div>       
                 <div className='mb-3'>
                         <label className='form-label fw-bold my-0 mb-2' htmlFor="email">Email Address</label>
                         <input 
                         type="email" 
                         name='email'
                         placeholder='Email Address' 
                         className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                         value={formValues.email}
                         onChange={handleInput}/>
                         {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                     </div> 
                     <div className="term-of-service-reset m-3 ms-0 me-0">
                     <p className="term-of-service-reset">
                         By register in to your account, you agree to our <a href="#" class="text-primary fw-bold text-decoration-none">Terms of Service </a> 
                         and consent to our <a href="#" class="text-primary fw-bold text-decoration-none">Cookies Police</a> and <a href="#" class="text-primary fw-bold text-decoration-none ">Privacy Policy</a>
                     </p>
                 </div>
                 <div className='d-grid'>
                        <button type='submit' 
                        className='btn btn-warning fw-bold text-white mt-0'
                        disabled={isLoading}>
                            {isLoading ? (
                                 <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                </>):('submit')}
                        </button>
                    </div>
                 </form>
            ):(
                
                <div className="reset-password-instruction">
                    <h3 className='text-center'>Reset Password</h3>
                    <p>If you have an account on the email, you will receive instructions for resetting your password at <b>{maskedEmail}</b></p>
                </div>
            )}
           
            <div class="reset-container w-100 mt-3">
                <a href="/register" class="text-primary text-decoration-none fw-bold">Register</a>
                <span class="text-muted">or</span>
                <a href="#" class="text-primary text-decoration-none fw-bold">Login here</a>
            </div>
        </div>
  </div>
  )
}

export default ResetPassword
