
import React from 'react';
import { Card, Badge, Button } from '../components/common';
import { Link } from 'react-router-dom';

export default function Terms() {
    
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <Badge variant="flat" color="primary" className="px-3 py-1 text-xs">
                            📜 Agreement & Rules
                        </Badge>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Terms of <span className="text-indigo-400">Service</span>
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Please review our terms and guidelines regarding the usage of our custom component architecture and SaaS application.
                    </p>
                </div>

                {/* Content Cards */}
                <div className="space-y-6 mb-16">
                    <Card className="p-6 sm:p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            By accessing or using our React application and modular design system components, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                        </p>
                    </Card>

                    <Card className="p-6 sm:p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-3">2. Use of Component Library</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Our centralized UI wrappers (`Button`, `Input`, `Modal`, `CustomSelect`, etc.) are provided for building scalable frontend applications. You are responsible for ensuring proper state propagation (`value`/`onChange`) and maintaining compatibility within your routing architecture.
                        </p>
                    </Card>

                    <Card className="p-6 sm:p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            All custom code structures, component wrappers, layout designs, and branding elements associated with this application remain our exclusive property unless specified under an open-source or commercial license agreement.
                        </p>
                    </Card>

                    <Card className="p-6 sm:p-8 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            The software and components are provided on an "as-is" and "as-available" basis without warranties of any kind. We shall not be held liable for any direct, indirect, or incidental damages resulting from the use or inability to use our application architecture.
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