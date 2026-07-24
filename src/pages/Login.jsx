
import React, { useState } from 'react';
import { Card, Badge, Button, Input, Spinner } from '../components/common';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all required fields.');
            return;
        }

        setLoading(true);
        
        // Simulate authentication delay
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center py-12 px-6">
            <div className="max-w-md w-full">
                
                {/* Header Branding */}
                <div className="text-center mb-8">
                    <div className="inline-block mb-3">
                        <Badge variant="flat" color="primary" className="px-3 py-1 text-xs">
                            🔐 Secure Access
                        </Badge>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                        Welcome <span className="text-indigo-400">Back</span>
                    </h1>
                    <p className="text-slate-400 text-sm">
                        Sign in to your account to manage your architecture settings.
                    </p>
                </div>

                {/* Login Card */}
                <Card className="p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl shadow-xl">
                    {success ? (
                        <div className="p-4 bg-teal-950/40 border border-teal-800/60 rounded-xl text-xs text-teal-400 font-medium text-center animate-in fade-in duration-200">
                            🎉 Successfully signed in! Redirecting...
                        </div>
                    ) : (
                        <form onSubmit={handleLogin} className="space-y-5">
                            
                            {error && (
                                <div className="p-3 bg-red-900/30 border border-red-800/50 rounded-xl text-xs text-red-400 text-center animate-in fade-in duration-200">
                                    {error}
                                </div>
                            )}

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
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        Password
                                    </label>
                                    <Link 
                                        to="/forgot-password" 
                                        className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Input 
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs font-medium focus:outline-none"
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>

                            {/* Sign In Button */}
                            <Button 
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 text-sm font-semibold flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Spinner size="sm" color="white" />
                                        <span>Signing in...</span>
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </form>
                    )}

                    <div className="mt-6 text-center text-xs text-slate-400">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-medium">
                            Sign Up
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