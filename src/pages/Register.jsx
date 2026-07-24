
import React, { useState } from 'react';
import { Card, Badge, Button, Input, Spinner } from '../components/common';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');

        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all required fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        setLoading(true);
        
        // Simulate registration delay
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, 1200);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center py-12 px-6">
            <div className="max-w-md w-full">
                
                {/* Header Branding */}
                <div className="text-center mb-8">
                    <div className="inline-block mb-3">
                        <Badge variant="flat" color="primary" className="px-3 py-1 text-xs">
                            🚀 Get Started
                        </Badge>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                        Create an <span className="text-indigo-400">Account</span>
                    </h1>
                    <p className="text-slate-400 text-sm">
                        Join us today and start managing your architecture settings effortlessly.
                    </p>
                </div>

                {/* Register Card */}
                <Card className="p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl shadow-xl">
                    {success ? (
                        <div className="p-4 bg-teal-950/40 border border-teal-800/60 rounded-xl text-xs text-teal-400 font-medium text-center animate-in fade-in duration-200">
                            🎉 Account created successfully! Redirecting to login...
                        </div>
                    ) : (
                        <form onSubmit={handleRegister} className="space-y-5">
                            
                            {error && (
                                <div className="p-3 bg-red-900/30 border border-red-800/50 rounded-xl text-xs text-red-400 text-center animate-in fade-in duration-200">
                                    {error}
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                    Full Name
                                </label>
                                <Input 
                                    type="text"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                    Email Address
                                </label>
                                <Input 
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                    Password
                                </label>
                                <Input 
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                    Confirm Password
                                </label>
                                <Input 
                                    type="password"
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>

                            {/* Sign Up Button */}
                            <Button 
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 text-sm font-semibold flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Spinner size="sm" color="white" />
                                        <span>Creating Account...</span>
                                    </>
                                ) : (
                                    'Sign Up'
                                )}
                            </Button>
                        </form>
                    )}

                    <div className="mt-6 text-center text-xs text-slate-400">
                        Already have an account?{' '}
                        <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
                            Sign In
                        </Link>
                    </div>
                </Card>

                {/* Back Link */}
                <div className="text-center mt-8">
                    <Link to="/" className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
                        ← Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
}