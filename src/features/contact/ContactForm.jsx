
import React, { useState } from 'react';
import { Button, Input, CustomSelect, ConfirmModal } from '../../components/common';
import { Link } from 'react-router-dom';
import { validateContact } from '../../utils/validation';

export default function ContactForm() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        message: ''
    });
    
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const departmentOptions = [
        { key: 'support', label: 'Technical Support' },
        { key: 'sales', label: 'Sales & Licensing' },
        { key: 'feedback', label: 'General Feedback' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const validation = validateContact(
            formData.name, 
            formData.email, 
            formData.department, 
            formData.message
        );

        if (!validation.isValid) {
            setError(validation.error);
            return;
        }

        setIsConfirmOpen(true);
    };

    const handleConfirmSubmit = () => {
        setIsConfirmOpen(false);
        setSuccess(true);
        setFormData({ name: '', email: '', department: '', message: '' });
        
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    return (
        <div>
            {success && (
                <div className="mb-6 p-4 bg-teal-950/40 border border-teal-800/60 rounded-xl text-xs text-teal-400 font-medium text-center animate-in fade-in duration-200">
                    🎉 Your message has been sent successfully! We will get back to you soon.
                </div>
            )}

            {error && (
                <div className="mb-6 p-3 bg-red-900/30 border border-red-800/50 rounded-xl text-xs text-red-400 text-center animate-in fade-in duration-200">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input 
                        label="Your Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input 
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <CustomSelect 
                    label="Department"
                    placeholder="Select inquiry type"
                    items={departmentOptions}
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                />

                <div className="flex flex-col gap-1.5 w-full">
                    <label className="text-xs font-medium text-slate-300">Message</label>
                    <textarea 
                        rows="4"
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg px-3 py-2.5 text-sm bg-slate-800 text-slate-100 border border-slate-700/80 shadow-md shadow-slate-950/50 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <Button 
                        as={Link} 
                        to="/" 
                        variant="bordered"
                        className="border-slate-700 text-slate-300 hover:bg-slate-800"
                    >
                        Back Home
                    </Button>
                    
                    <Button 
                        type="submit"
                        color="primary"
                        className="border-slate-700 text-slate-300 hover:bg-slate-800"
                    >
                        Send Message
                    </Button>
                </div>
            </form>

            {/* Confirmation Modal */}
            <ConfirmModal 
                isOpen={isConfirmOpen}
                onClose={() => setIsConfirmOpen(false)}
                onConfirm={handleConfirmSubmit}
                title="Confirm Submission"
                message="Are you sure you want to send this message to our support team?"
                confirmText="Yes, Send"
                cancelText="Review"
            />
        </div>
    );
}