
import React from 'react';
import { Button as HeroButton } from "@heroui/react";

export default function Button({ children, ...props }) {
    return (
        <HeroButton {...props}>
            {children}
        </HeroButton>
    );
}