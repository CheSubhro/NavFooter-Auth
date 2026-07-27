
import React, { useState } from 'react';
import { Button, Input } from '../../components/common';
import { validateNewsletter } from '../../utils/validation';

export default function NewsletterForm() {
    
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        const validation = validateNewsletter(email);
        if (!validation.isValid) {
            setError(validation.error);
            return;
        }

        // Success simulation
        setSuccess(true);
        setEmail('');
        
        setTimeout(() => {
            setSuccess(false);
        }, 4000);
    };

    return (
        <div className="space-y-3 md:col-span-4 bg-slate-800/40 p-5 rounded-xl border border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">Stay Updated</h3>
            <p className="text-sm text-slate-400">
                Subscribe to our newsletter for the latest updates and announcements.
            </p>

            {success && (
                <div className="p-2.5 bg-teal-950/40 border border-teal-800/60 rounded-lg text-xs text-teal-400 font-medium text-center animate-in fade-in duration-200">
                    🎉 Thanks for subscribing!
                </div>
            )}

            {error && (
                <div className="p-2.5 bg-red-900/30 border border-red-800/50 rounded-lg text-xs text-red-400 text-center animate-in fade-in duration-200">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-1">
                <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    size="sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                    size="sm" 
                    type="submit"
                    color="primary"
                >
                    Subscribe
                </Button>
            </form>
        </div>
    );
}