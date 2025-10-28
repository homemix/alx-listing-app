import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps & { className?: string }> = ({
                                                                    label,
                                                                    onClick,
                                                                    variant = 'primary',
                                                                    disabled = false,
                                                                    className = '',
                                                                }) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap';

    const variants = {
        primary: 'bg-airbnb-red text-white hover:bg-airbnb-red/90 focus:ring-airbnb-red px-6 py-3 text-sm shadow-md hover:shadow-lg',
        secondary: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300 px-6 py-3 text-sm',
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;