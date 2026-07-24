
import React, { useState } from 'react';
import { Card, Badge, Button, Input, Spinner } from '../components/common';

export default function ChangePassword() {
    
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChangePassword = (e) => {
        e.preventDefault();
        setError('');

        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New passwords do not match.');
            return;
        }

        if (newPassword.length < 6) {
            setError('New password must be at least 6 characters long.');
            return;
        }

        setLoading(true);

        // Simulate backend API request delay
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 py-12 px-6 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8">
                
                {/* Header Section */}
                <div className="text-center space-y-2">
                    <Badge variant="flat" color="primary" className="px-3 py-1 text-xs">
                        🔒 Security Settings
                    </Badge>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">
                        Change <span className="text-emerald-400">Password</span>
                    </h1>
                    <p className="text-slate-400 text-sm">
                        Ensure your account is using a long, random password to stay secure.
                    </p>
                </div>

                {/* Password Form Card */}
                <Card className="p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl shadow-xl">
                    <form onSubmit={handleChangePassword} className="space-y-5">
                        
                        {success && (
                            <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-xs text-emerald-400 font-medium text-center animate-in fade-in duration-200">
                                🎉 Password changed successfully!
                            </div>
                        )}

                        {error && (
                            <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-xl text-xs text-rose-400 text-center animate-in fade-in duration-200">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                Current Password
                            </label>
                            <Input 
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Enter current password"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                New Password
                            </label>
                            <Input 
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                Confirm New Password
                            </label>
                            <Input 
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <Button 
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 text-sm font-semibold flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Spinner size="sm" color="white" />
                                        <span>Updating Password...</span>
                                    </>
                                ) : (
                                    'Update Password'
                                )}
                            </Button>
                        </div>

                    </form>
                </Card>

            </div>
        </div>
    );
}