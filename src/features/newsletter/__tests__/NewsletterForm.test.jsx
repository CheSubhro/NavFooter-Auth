
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NewsletterForm from '../NewsletterForm';

describe('NewsletterForm Component', () => {

    it('renders newsletter form elements correctly', () => {
      render(<NewsletterForm />);
      
      expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
    });

    it('shows error message when submitting empty email', () => {
        render(<NewsletterForm />);
        
        const submitButton = screen.getByRole('button', { name: /subscribe/i });
        fireEvent.click(submitButton);

        expect(screen.getByText(/please enter your email address/i)).toBeInTheDocument();
    });

    it('shows success message and clears input on valid email submission', () => {
        render(<NewsletterForm />);
        
        const input = screen.getByPlaceholderText(/enter your email/i);
        const submitButton = screen.getByRole('button', { name: /subscribe/i });

        fireEvent.change(input, { target: { value: 'test@example.com' } });
        fireEvent.click(submitButton);

        expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument();
        expect(input.value).toBe('');
    });
});