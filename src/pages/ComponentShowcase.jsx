
// src/pages/ComponentShowcase.jsx
import React, { useState } from 'react';
import {
  Button,
  Input,
  Spinner,
  Modal,
  Badge,
  Tooltip,
  ErrorBoundary,
  Card,
  EmptyState,
  ConfirmModal,
  Pagination,
  CustomSelect
} from '../components/common'; 

export default function ComponentShowcase() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);

    const selectOptions = [
        { value: '1', label: 'Option One' },
        { value: '2', label: 'Option Two' }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8 space-y-10">
            <h1 className="text-3xl font-bold border-b border-slate-800 pb-4">
                Design System Components Showcase
            </h1>

            {/* 1. Button & Badge */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-300">Buttons & Badges</h2>
                <div className="flex flex-wrap gap-3 items-center">

                    {/* Button */}
                    <Button onClick={() => setIsConfirmOpen(true)}>Click Me</Button>

                    {/* Badge */}
                    <Badge color="primary">Active</Badge>
                    <Badge color="danger">Alert</Badge>
                    <Badge color="warning">Pending</Badge>
                    <Badge color="secondary">Draft</Badge>

                </div>
            </section>

            {/* 2. Input & CustomSelect */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-300">Inputs & Select</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">

                    {/* Inputs */}
                    <Input
                        label="Username"
                        placeholder="Type something..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    {/* Select */}
                    <CustomSelect
                        label="Choose Option"
                        items={selectOptions}
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        placeholder="Select an option"
                    />
                </div>
            </section>

            {/* 3. Card & Spinner */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-300">Card & Spinner</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Card */}
                    <Card 
                        header="Card Title" 
                        footer={<Button size="sm">Action</Button>}
                    >
                        <p className="text-slate-400">This is a container card example with modular header and footer support.</p>
                    </Card>

                    {/* Spinner */}
                    <div className="flex items-center gap-4 bg-slate-900 p-6 border border-slate-800 rounded-xl shadow-xl">
                        <Spinner size="lg" color="emerald" />
                        <div className="flex flex-col">
                            <span className="text-slate-200 font-medium">Processing Data</span>
                            <span className="text-slate-400 text-xs">Please wait while we sync your components...</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Modals & ConfirmModal */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-300">Modals</h2>
                <div className="flex gap-4">
                    <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                    <Button onClick={() => setIsConfirmOpen(true)}>Open Confirm Modal</Button>
                </div>

                <Modal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)}
                    title="Standard Modal"
                    footer={<Button onClick={() => setIsModalOpen(false)}>Close</Button>}
                >
                    <p className="text-slate-400">This is a custom modular content area inside the standard modal.</p>
                </Modal>

                <ConfirmModal
                    isOpen={isConfirmOpen}
                    onClose={() => setIsConfirmOpen(false)}
                    onConfirm={() => {
                        // Ekhane apnar actual delete ba confirm logic thakbe
                        console.log('Action confirmed successfully!');
                        setIsConfirmOpen(false);
                    }}
                    title="Are you sure?"
                    message="This action cannot be undone. All associated data will be permanently removed."
                />
            </section>

            {/* 5. Tooltip & Pagination */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-300">Tooltip & Pagination</h2>
                <div className="flex flex-col gap-6">
                    <div>
                        <Tooltip content="This is a helpful tool tip">
                            <span className="underline cursor-pointer text-emerald-400 hover:text-emerald-300 transition-colors">
                                Hover over me
                            </span>
                        </Tooltip>
                    </div>
                    <Pagination
                        total={10}
                        page={currentPage}
                        onChange={(newPage) => setCurrentPage(newPage)}
                    />
                </div>
            </section>

            {/* 6. EmptyState & ErrorBoundary */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-slate-300">Empty State & Error Boundary</h2>
                <ErrorBoundary>
                    <EmptyState
                        title="No Projects Found"
                        description="Get started by creating a new project or importing an existing repository to your dashboard."
                        action={<Button className="text-xs py-1.5 px-3">Create Project</Button>}
                    />
                </ErrorBoundary>
            </section>
        </div>
    );
}