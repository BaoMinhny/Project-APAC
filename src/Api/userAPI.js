export const checkEmailExists = async (email) => {
  try {
    const res = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(email)}`); // Fake Api 

    if (!res.ok) {
      throw new Error("Server error");
    }

    const data = await res.json();

    if (Array.isArray(data) && data.length > 0) {
      return true;  
    } else {
      return false;
    }
  } catch (error) {
    console.error("Lỗi khi kiểm tra email:", error);
    throw new Error("Lỗi kiểm tra email. Vui lòng thử lại sau.");
  }
};