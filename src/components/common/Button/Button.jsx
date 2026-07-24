
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
    color = 'secondary', 
    disabled = false,
    ...props 
}) {
    // Dynamic color styles
    const colorVariants = {
        primary: "bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500/30 shadow-indigo-950/40",
        secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700/80 shadow-slate-950/50",
        danger: "bg-rose-600 hover:bg-rose-500 text-white border-rose-500/30 shadow-rose-950/40"
    };

    const selectedColorStyle = colorVariants[color] || colorVariants.secondary;

    const combinedClassName = `
        font-medium rounded-xl transition-all duration-200 cursor-pointer border shadow-md
        active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        ${selectedColorStyle}
        ${className}
    `.trim();

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
            onPress={handleClick} 
            isDisabled={disabled}
            {...props}
        >
            {children}
        </HeroButton>
    );
}