import React, { useEffect, useState } from 'react'
import useResetPassword from '../../hooks/useResetPassword';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import useVerifyToken from '../../hooks/useVerifyToken';
import { useNavigate, useLocation } from 'react-router-dom';
import { EyeClosedIcon, EyeOpenIcon } from '../../components/common/icons/DropboxIcon';

const ResetPasswordForm = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {resetPassword, isLoading} = useResetPassword();
     const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const {verifyToken} = useVerifyToken();
    const navigate = useNavigate();
    const location = useLocation();

    
    useEffect(() => {
        if (location.state?.toastMessage) {
        toast.error(location.state.toastMessage);
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
        }
        }, [location.state]);   

    useEffect(() => {
        if (token) {
            verifyToken(token).then((isValid) => {
            if (!isValid) {
                navigate('/ResetPassword', {
                    state: {
                        toastMessage: 'That reset link has expired or isn’t valid.',
                    },
                });
            }
            });
        }
        }, [token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Confirmation password does not match");
            return;
        }
        const res = await resetPassword(token, password, confirmPassword)
        if(res.success){   
            setTimeout(() => {
                navigate("/Login", {
                state: {
                toastMessage: "Đổi mật khẩu thành công!",
                },
                });
      }, 2000);
          
        }else{
             toast.error(res.message || "Failed to reset password");
        }
    }
  
  return (
    <div className='reset template d-flex justify-content-center align-items-center min-vh-100 bg-white'>
     <Toaster position="top-center" reverseOrder={false} />
        <div className='form-container p-4 md-5 rounded bg-white border border-secondary'>
                 <form  onSubmit={handleSubmit}>
                 <h3 className='text-center'>Reset Password</h3>      
                 <div className='mb-3'  style={{ position: 'relative' }}>
                         <label className='form-label fw-bold my-0 mb-2' htmlFor="email">Password</label>
                         <input 
                           type={showPassword ? "text" : "password"}
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password' 
                            className={`form-control`}/>
                        <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                            position: 'absolute',
                            top: '38px',
                            right: '10px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                        }}
                        aria-label={showPassword  ? "Hide password" : "Show password"}
                     >
                         {showPassword ? <EyeClosedIcon/> : <EyeOpenIcon/>}
                     </button>
                     </div> 
                     <div className='mb-3' style={{ position: 'relative' }}>
                         <label className='form-label fw-bold my-0 mb-2' htmlFor="email">Confirm Password</label>
                         <input 
                         type={showConfirmPassword ? "text" : "password"}
                         name='confirmPassword'
                         value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                         placeholder='Confirm Password' 
                         className={`form-control`}/>
                          <button 
                            type="button" 
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            style={{
                            position: 'absolute',
                            top: '38px',
                            right: '10px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                        }}
                        aria-label={showConfirmPassword  ? "Hide password" : "Show password"}
                     >
                         {showConfirmPassword ? <EyeClosedIcon/> : <EyeOpenIcon/>}
                     </button>
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
        </div>
  </div>
  )
}

export default ResetPasswordForm
