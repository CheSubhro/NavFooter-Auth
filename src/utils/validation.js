
export const validateLogin = (identifier, password) => {
    if (!identifier || !password) {
        return { isValid: false, error: 'Please fill in all required fields.' };
    }

    if (password.length < 6) {
        return { isValid: false, error: 'Password must be at least 6 characters long.' };
    }

    return { isValid: true, error: '' };
};

export const validateRegister = (fullName, username, email, password, confirmPassword, avatar) => {
    if (!fullName || !username || !email || !password || !confirmPassword) {
        return { isValid: false, error: 'Please fill in all required fields.' };
    }

    if (!avatar) {
        return { isValid: false, error: 'Avatar image is required.' };
    }

    if (password !== confirmPassword) {
        return { isValid: false, error: 'Passwords do not match.' };
    }

    if (password.length < 6) {
        return { isValid: false, error: 'Password must be at least 6 characters long.' };
    }

    return { isValid: true, error: '' };
};