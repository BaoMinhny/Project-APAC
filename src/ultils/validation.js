export default function Validation(values) {
    const errors = {};

    const email_pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

   
    if (!values) {
        return { general: "Dữ liệu không hợp lệ" };
    }

    // Kiểm tra email
    if (!values.email)  {
        errors.email = "Please enter a valid email address!";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email didn't match the required pattern!";
    }

    // Kiểm tra password
    if (!values.password) {
        errors.password = "Please enter a valid password!";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password much have at least 8 characters long, include uppercase, lowercase, a number, and a special character!";
    }

    return errors;
}