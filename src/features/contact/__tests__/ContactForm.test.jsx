
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ContactForm from '../ContactForm';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('ContactForm Component', () => {
    it('renders contact form elements correctly', () => {
        render(
            <BrowserRouter>
                <ContactForm />
            </BrowserRouter>
        );

        expect(screen.getByPlaceholderText(/john doe/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/john@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/select inquiry type/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/type your message here.../i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /^send message$/i })).toBeInTheDocument();
    });

    it('shows validation error when required fields are empty', () => {
        render(
            <BrowserRouter>
                <ContactForm />
            </BrowserRouter>
        );

        const submitButton = screen.getByRole('button', { name: /^send message$/i });
        fireEvent.click(submitButton);

        expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
    });

    it('opens confirmation modal on valid form submission', async () => {
        render(
            <BrowserRouter>
                <ContactForm />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText(/john doe/i), { target: { value: 'Jane Doe' } });
        fireEvent.change(screen.getByPlaceholderText(/john@example.com/i), { target: { value: 'jane@example.com' } });
        
        // Select the department select element and choose a valid option value
        const selectElement = screen.getByRole('combobox');
        fireEvent.change(selectElement, { target: { value: 'support' } });

        fireEvent.change(screen.getByPlaceholderText(/type your message here.../i), { target: { value: 'Hello, I need technical support.' } });

        const submitButton = screen.getByRole('button', { name: /^send message$/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText(/confirm submission/i)).toBeInTheDocument();
        });
    });
});