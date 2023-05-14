
export const validateEmail = (email) => {
    if (email.trim() === "") {
        return "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Email is invalid";
    } else {
        return "";
    }
};

export const validatePassword = (password) => {
    if (password.trim() === "") {
        return "Password is required";
    } else if (password.length < 8) {
        return "Password should be at least 8 characters";
    } else {
        return "";
    }
};
