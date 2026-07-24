
import React from 'react';
import { Card, Badge, Button } from '../components/common';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <Badge variant="flat" color="primary" className="px-3 py-1 text-xs">
                            💡 Architecture Overview
                        </Badge>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        About Our <span className="text-indigo-400">Design System</span>
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Built for scale, consistency, and peak performance using a centralized component wrapper pattern.
                    </p>
                </div>

                {/* Core Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <Card className="p-6 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-xl">
                        <div className="text-2xl mb-3">🧱</div>
                        <h3 className="text-lg font-semibold text-white mb-2">Centralized Wrappers</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Every core element like <code className="text-indigo-300 bg-slate-900 px-1.5 py-0.5 rounded">Button</code>, <code className="text-indigo-300 bg-slate-900 px-1.5 py-0.5 rounded">Modal</code>, and <code className="text-indigo-300 bg-slate-900 px-1.5 py-0.5 rounded">CustomSelect</code> is abstracted into a unified modular folder structure.
                        </p>
                    </Card>

                    <Card className="p-6 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-xl">
                        <div className="text-2xl mb-3">🎨</div>
                        <h3 className="text-lg font-semibold text-white mb-2">Slate Dark Theme</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Meticulously tuned with Tailwind CSS utility classes using <code className="text-indigo-300 bg-slate-900 px-1.5 py-0.5 rounded">slate-900</code> backgrounds and <code className="text-indigo-300 bg-slate-900 px-1.5 py-0.5 rounded">slate-800</code> component borders for a cohesive visual hierarchy.
                        </p>
                    </Card>
                </div>

                {/* Architecture Highlights */}
                <div className="p-8 rounded-2xl bg-slate-800/30 border border-slate-800 mb-16">
                    <h2 className="text-xl font-bold text-white mb-4">Architecture Stack</h2>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400 font-bold">✔</span> **React 19 & Vite**: Ultra-fast hot module replacement and modern concurrent rendering.
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400 font-bold">✔</span> **Robust State Isolation**: Custom lightweight wrappers prevent external export breakages and ensure smooth UI triggers.
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-indigo-400 font-bold">✔</span> **Reusable Design System**: Pagination, ConfirmModals, Tooltips, and Spinners ready out-of-the-box.
                        </li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Button 
                        as={Link} 
                        to="/" 
                        size="lg"
                        className="px-8 font-semibold"
                    >
                        Back to Home
                    </Button>
                </div>

            </div>
        </div>
    );
}