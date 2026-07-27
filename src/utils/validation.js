
export const validateLogin = (identifier, password) => {
    if (!identifier || !password) {
        return { isValid: false, error: 'Please fill in all required fields.' };
    }

    if (password.length < 6) {
        return { isValid: false, error: 'Password must be at least 6 characters long.' };
    }

    return { isValid: true, error: '' };
};