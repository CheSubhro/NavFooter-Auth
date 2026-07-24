
import React, { useState } from 'react';
import { Card, Badge, Button, Input, CustomSelect, ConfirmModal } from '../components/common';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        message: ''
    });
    
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const departmentOptions = [
        { key: 'support', label: 'Technical Support' },
        { key: 'sales', label: 'Sales & Licensing' },
        { key: 'feedback', label: 'General Feedback' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsConfirmOpen(true);
    };

    const handleConfirmSubmit = () => {
        setFormData({ name: '', email: '', department: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <div className="max-w-3xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <Badge variant="flat" color="primary" className="px-3 py-1 text-xs">
                            📬 Get in Touch
                        </Badge>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Contact Our <span className="text-indigo-400">Support Team</span>
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Have questions about our centralized design architecture? Drop us a message below.
                    </p>
                </div>

                {/* Contact Form Card */}
                <Card className="p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Input 
                                label="Your Name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                            <Input 
                                label="Email Address"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
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
                                required
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
                            
                            {/* Color prop ba clean classes use kora hoyeche jate button-er background thik thake */}
                            <Button 
                                type="submit"
                                color="primary"
                                className="border-slate-700 text-slate-300 hover:bg-slate-800"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </Card>

            </div>

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