
import React from 'react';
import { Badge as HeroBadge } from "@heroui/react";

export default function Badge({ children, ...props }) {
    return (
        <HeroBadge {...props}>
            {children}
        </HeroBadge>
    );
}