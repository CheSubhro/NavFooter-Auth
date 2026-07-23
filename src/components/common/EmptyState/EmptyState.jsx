
import React from 'react';

export default function EmptyState({ title = "No Data Found", description, action }) {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-gray-200 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
            {description && <p className="text-sm text-gray-500 mt-1 mb-4">{description}</p>}
            {action && <div className="mt-2">{action}</div>}
        </div>
    );
}