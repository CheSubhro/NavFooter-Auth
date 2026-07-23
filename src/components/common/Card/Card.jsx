
import React from 'react';
import { Card as HeroCard, CardBody, CardHeader, CardFooter } from "@heroui/react";

export default function Card({ header, body, footer, ...props }) {
    return (
        <HeroCard {...props}>
            {header && <CardHeader>{header}</CardHeader>}
            <CardBody>{body}</CardBody>
            {footer && <CardFooter>{footer}</CardFooter>}
        </HeroCard>
    );
}