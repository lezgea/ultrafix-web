"use client";

import React, { useState, ReactNode, useRef, useEffect } from 'react';

interface IDropdownProps {
    content?: ReactNode;
    children: ReactNode;
}

export const Dropdown: React.FC<IDropdownProps> = ({ content, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div
                onClick={toggleDropdown}
                aria-expanded={isOpen}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') toggleDropdown();
                }}
            >
                {children} {/* Renders children element */}
            </div>
            <div
                className={`origin-top-center absolute mt-5 -left-[100%] rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 transition-all duration-300 ease-out transform 
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'} pointer-events-none`}
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
                {content}
            </div>
        </div>
    );
};
