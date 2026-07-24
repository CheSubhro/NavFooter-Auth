
import React from 'react';
import { Card, Badge, Button } from '../components/common';
import { Link } from 'react-router-dom';

export default function Privacy() {
    
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <Badge variant="flat" color="primary" className="px-3 py-1 text-xs">
                            🔒 Data & Security
                        </Badge>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Privacy <span className="text-indigo-400">Policy</span>
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Learn how our centralized design architecture handles user state, data privacy, and security.
                    </p>
                </div>

                {/* Content Cards */}
                <div className="space-y-6 mb-16">
                    <Card className="p-6 sm:p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Our application is built with a decoupled modular architecture. We collect minimal user input strictly required for form submissions, support inquiries, and preference persistence through standard state wrappers. No third-party tracking scripts are bundled into our core UI library.
                        </p>
                    </Card>

                    <Card className="p-6 sm:p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-3">2. State Isolation & Security</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Form states, modal triggers, and interactive elements use isolated local React hooks. This ensures data remains securely scoped within client-side components without unauthorized leakage across external component boundaries.
                        </p>
                    </Card>

                    <Card className="p-6 sm:p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-3">3. Cookies and Local Storage</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            We utilize minimal local storage solely for preserving user UI preferences (such as dark mode states or form input drafts). You can clear these at any time via your browser settings.
                        </p>
                    </Card>

                    <Card className="p-6 sm:p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-3">4. Policy Updates</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            As our design system evolves with new React standards and component wrappers, this privacy policy may be updated. Major changes will be reflected directly on this page.
                        </p>
                    </Card>
                </div>

                {/* Back Navigation */}
                <div className="text-center">
                    <Button 
                        as={Link} 
                        to="/" 
                        variant="bordered"
                        className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8"
                    >
                        Back to Home
                    </Button>
                </div>

            </div>
        </div>
    );
}