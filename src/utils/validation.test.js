
import { describe, it, expect } from 'vitest';
import { validateNewsletter } from './validation';

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