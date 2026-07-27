
export const validateLogin = (email, password) => {

    if (!email || !password) {
        return { isValid: false, error: 'Please fill in all required fields.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, error: 'Please enter a valid email address.' };
    }

    if (password.length < 6) {
        return { isValid: false, error: 'Password must be at least 6 characters long.' };
    }

    return { isValid: true, error: '' };
};