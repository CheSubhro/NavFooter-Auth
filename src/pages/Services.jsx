
import React, { useState } from 'react';
import { Card, Badge, Button, Modal, ConfirmModal, CustomSelect } from '../components/common';
import { Link } from 'react-router-dom';

export default function Services() {
    
    const [selectedService, setSelectedService] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [filterTier, setFilterTier] = useState('');

    const serviceList = [
        {
            id: 'design-system',
            title: 'Modular Design System',
            tier: 'enterprise',
            badgeColor: 'primary',
            description: 'Custom React 19 component wrappers designed to eliminate external library friction and ensure absolute visual consistency.',
            features: ['Pure Tailwind Wrappers', 'Zero HeroUI Dependency Bugs', 'Optimized Slate Theme', 'Full TypeScript-ready Structure']
        },
        {
            id: 'perf-audit',
            title: 'Performance & Architecture Audit',
            tier: 'pro',
            badgeColor: 'success',
            description: 'Deep-dive analysis into Vite bundling, React concurrent rendering hooks, and component re-render optimizations.',
            features: ['Vite Build Optimization', 'Bundle Size Reduction', 'Memory Leak Detection', 'Concurrent Rendering Check']
        },
        {
            id: 'custom-saas',
            title: 'SaaS Boilerplate & Scaling',
            tier: 'enterprise',
            badgeColor: 'primary',
            description: 'Production-ready SaaS architecture featuring robust routing, form validation wrappers, and state isolation patterns.',
            features: ['React Router 7 Integration', 'Protected Layouts & Modals', 'Reusable Pagination & Tables', 'Error Boundary Fallbacks']
        }
    ];

    const tierOptions = [
        { key: 'pro', label: 'Pro Tier' },
        { key: 'enterprise', label: 'Enterprise Tier' }
    ];

    const filteredServices = filterTier 
        ? serviceList.filter(s => s.tier === filterTier)
        : serviceList;

    const handleOpenDetails = (service) => {
        setSelectedService(service);
        setIsDetailsOpen(true);
    };

    const handleBookingConfirm = () => {
        setIsBookingOpen(false);
        setIsDetailsOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <Badge variant="flat" color="primary" className="px-3 py-1 text-xs">
                            ⚡ Professional Solutions
                        </Badge>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Our Architecture <span className="text-indigo-400">Services</span>
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Scale your web application with our battle-tested, modular component design solutions.
                    </p>
                </div>

                {/* Filter Control Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-slate-800/40 p-4 rounded-xl border border-slate-800">
                    <div className="w-full sm:w-64">
                        <CustomSelect 
                            placeholder="Filter by tier..."
                            items={tierOptions}
                            value={filterTier}
                            onChange={(e) => setFilterTier(e.target.value)}
                        />
                    </div>
                    {filterTier && (
                        <Button 
                            variant="bordered" 
                            size="sm"
                            onClick={() => setFilterTier('')}
                            className="text-xs text-slate-400 border-slate-700 hover:bg-slate-800"
                        >
                            Clear Filter
                        </Button>
                    )}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredServices.map((service) => (
                        <Card 
                            key={service.id}
                            className="p-6 bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <Badge variant="flat" color={service.badgeColor} className="text-xs px-2.5 py-0.5">
                                        {service.tier.toUpperCase()}
                                    </Badge>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>
                            
                            <Button 
                                variant="bordered"
                                onClick={() => handleOpenDetails(service)}
                                className="w-full border-slate-700 hover:bg-slate-800 text-indigo-400 hover:text-indigo-300"
                            >
                                View Details
                            </Button>
                        </Card>
                    ))}
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

            {/* Service Details Modal */}
            <Modal 
                isOpen={isDetailsOpen} 
                onClose={() => setIsDetailsOpen(false)}
                title={selectedService?.title}
            >
                {selectedService && (
                    <div className="space-y-6">
                        <p className="text-slate-300 text-sm leading-relaxed">
                            {selectedService.description}
                        </p>
                        
                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
                                Included Specifications
                            </h4>
                            <ul className="space-y-2">
                                {selectedService.features.map((feat, idx) => (
                                    <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                                        <span className="text-indigo-400 font-bold">✓</span> {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                            <Button 
                                variant="bordered"
                                onClick={() => setIsDetailsOpen(false)}
                                className="border-slate-700 text-slate-300 hover:bg-slate-800"
                            >
                                Close
                            </Button>
                            <Button 
                                color="primary"
                                onClick={() => setIsBookingOpen(true)}
                                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
                            >
                                Request Service
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>

            {/* Confirmation Modal */}
            <ConfirmModal 
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                onConfirm={handleBookingConfirm}
                title="Confirm Service Request"
                message={`Are you sure you want to request consultation for "${selectedService?.title}"?`}
                confirmText="Confirm Request"
                cancelText="Back"
            />
        </div>
    );
}