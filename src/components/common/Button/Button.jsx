
import React from 'react';
import { Button as HeroButton } from "@heroui/react";

export default function Button({ 
    children, 
    as,
    to,
    href,
    onPress, 
    onClick, 
    className = '', 
    variant = 'solid', 
    color = 'primary', 
    ...props 
}) {
    const combinedClassName = `
        font-medium rounded-lg transition-all duration-200 cursor-pointer
        bg-slate-800 text-slate-100 border border-slate-700/80 
        shadow-md shadow-slate-950/50 
        hover:bg-slate-700 hover:border-slate-600 hover:text-white 
        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
    `;

    const handleClick = onClick || onPress;

    if (as || to || href) {
        const Component = as || 'a';
        const linkProps = to ? { to } : href ? { href } : {};
        return (
            <Component 
                className={`inline-flex items-center justify-center ${combinedClassName}`} 
                {...linkProps}
                onClick={handleClick} 
                {...props}
            >
                {children}
            </Component>
        );
    }

    return (
        <HeroButton 
            variant={variant}
            className={combinedClassName}
            onPress={onPress || onClick} 
            {...props}
        >
            {children}
        </HeroButton>
    );
}