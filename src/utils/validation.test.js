
import { describe, it, expect } from 'vitest';
import { validateNewsletter, validateLogin } from './validation';

describe('Newsletter Validation', () => {
    it('should return invalid for empty email', () => {
        const result = validateNewsletter('');
        expect(result.isValid).toBe(false);
    });

    it('should return invalid for incorrect email format', () => {
        const result = validateNewsletter('invalid-email');
        expect(result.isValid).toBe(false);
    });

    it('should return valid for correct email format', () => {
        const result = validateNewsletter('test@example.com');
        expect(result.isValid).toBe(true);
    });
});

describe('Login Validation', () => {
    it('should return invalid if identifier or password is empty', () => {
        const result = validateLogin('', '');
        expect(result.isValid).toBe(false);
        expect(result.error).toBe('Please fill in all required fields.');
    });

    it('should return invalid if password is less than 6 characters', () => {
        const result = validateLogin('user@example.com', '12345');
        expect(result.isValid).toBe(false);
        expect(result.error).toBe('Password must be at least 6 characters long.');
    });

    it('should return valid for correct credentials format', () => {
        const result = validateLogin('user@example.com', 'password123');
        expect(result.isValid).toBe(true);
        expect(result.error).toBe('');
    });
});