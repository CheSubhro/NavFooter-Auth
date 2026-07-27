
import React from 'react';
import { Card, Badge } from '../components/common';
import ContactForm from '../features/contact/ContactForm';

export default function Contact() {
    
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
                    <ContactForm />
                </Card>

            </div>
        </div>
    );
}