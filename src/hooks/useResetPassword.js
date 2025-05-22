import { useState } from "react";

const useResetPassword = () => {
 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const resetPassword = async (token, password) => {
        setIsLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const response = await fetch('http://localhost:3001/auth/reset-password', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                token,
                password,
              }),
            });
      
            const data = await response.json();
      
            if (response.ok) {
              setSuccessMessage(data.message); // Thành công
               return { success: true, message: data.message };
            } else {
              setError(data.message || 'Lỗi khi reset mật khẩu');
               return { success: false, message: data.message  };
            }
          } catch (error) {
            setError('Có lỗi xảy ra. Vui lòng thử lại!');
          } finally {
            setIsLoading(false);
          }
        };
      
        return { resetPassword, isLoading, error, successMessage };
    }

    
export default useResetPassword;