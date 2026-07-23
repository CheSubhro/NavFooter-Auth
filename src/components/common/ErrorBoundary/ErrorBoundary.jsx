
import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
                    <h2 className="text-xl font-bold text-red-600 mb-2">Something went wrong.</h2>
                    <p className="text-gray-500 mb-4">{this.state.error?.message}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="px-4 py-2 bg-primary text-white rounded-md"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}