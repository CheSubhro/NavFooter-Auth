
import React, { useState } from 'react';
import { Card, Badge, Button, Input, EmptyState } from '../components/common';
import { Link } from 'react-router-dom';

export default function FAQ() {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [openIndex, setOpenIndex] = useState(null);

    const faqList = [
        {
            question: "Why migrate from HeroUI to custom Tailwind wrappers?",
            answer: "HeroUI exports can sometimes cause strict bundling discrepancies, unexpected syntax errors, or event conflict issues in React 19 environments. Centralized custom wrappers give us total control over state management, event mapping (onPress/onClick), and absolute design system consistency."
        },
        {
            question: "How do I use the custom input and select components?",
            answer: "All common UI elements are exported from `src/components/common`. You can simply import `Input` or `CustomSelect`, pass standard attributes like `value`, `onChange`, and `placeholder`, and they will automatically adhere to the slate dark theme and indigo focus states."
        },
        {
            question: "Is the app optimized for React Router and modern routing?",
            answer: "Yes! Our components support seamless prop forwarding, such as passing `as={Link}` to buttons for router navigation without breaking styling or event handling."
        },
        {
            question: "How is the slate dark theme configured?",
            answer: "The design system relies on a consistent tailwind color palette utilizing `bg-slate-900` for application backgrounds, `slate-800` for card containers, and slate borders with subtle custom shadows."
        }
    ];

    const filteredFaqs = faqList.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6">
            <div className="max-w-3xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <Badge variant="flat" color="primary" className="px-3 py-1 text-xs">
                            ❓ Got Questions?
                        </Badge>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Frequently Asked <span className="text-indigo-400">Questions</span>
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Find quick answers about our custom component architecture, styling, and implementation patterns.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <Input 
                        placeholder="Search questions or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="shadow-lg"
                    />
                </div>

                {/* FAQ Accordion List */}
                {filteredFaqs.length > 0 ? (
                    <div className="space-y-4 mb-16">
                        {filteredFaqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <Card 
                                    key={index}
                                    className="bg-slate-800/50 border border-slate-800 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-200"
                                >
                                    <button 
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                                    >
                                        <span className="font-semibold text-white text-base">
                                            {faq.question}
                                        </span>
                                        <span className={`text-indigo-400 font-bold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                                            ▼
                                        </span>
                                    </button>
                                    
                                    {isOpen && (
                                        <div className="px-5 pb-5 pt-0 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 mt-2 pt-3">
                                            {faq.answer}
                                        </div>
                                    )}
                                </Card>
                            );
                        })}
                    </div>
                ) : (
                    <div className="mb-16">
                        <EmptyState 
                            title="No matching questions found"
                            description="Try searching with a different term or contact our support team."
                        />
                    </div>
                )}

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