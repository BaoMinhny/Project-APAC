import { useState } from "react";

const useVerifyToken = () => {
    const [verifying, setVerifying] = useState(false);

    const verifyToken = async (token) => {
        setVerifying(true);
        try {
            const res = await fetch('http://localhost:3001/auth/verify-reset-token' , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });
            if (!res.ok) throw new Error((await res.json()).message);
            return true;
        } catch (error) {
           return false;
        }finally{
            setVerifying(false);
        }
    }
     return { verifying, verifyToken };
}

export default useVerifyToken;