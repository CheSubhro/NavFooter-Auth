
import React from 'react';
import { Select, SelectItem } from "@heroui/react";

export default function CustomSelect({ items = [], label, placeholder, ...props }) {
    return (
        <Select label={label} placeholder={placeholder} {...props}>
            {items.map((item) => (
                <SelectItem key={item.key || item.id}>
                    {item.label || item.name}
                </SelectItem>
            ))}
        </Select>
    );
}