
import React from 'react';
import { Tooltip as HeroTooltip } from "@heroui/react";

export default function Tooltip({ children, content, ...props }) {
    return (
        <HeroTooltip content={content} {...props}>
            {children}
        </HeroTooltip>
    );
}