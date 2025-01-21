import React from 'react';

interface ISidebarProps {
    navLinks: React.ReactNode[];
    visible: boolean;
    setSidebarOpen: (val: boolean) => void;
}

export const Sidebar: React.FC<ISidebarProps> = ({ navLinks, visible, setSidebarOpen }) => {
    const sidebarRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setSidebarOpen]);

    return (
        visible && (
            <div
                data-testid="sidebar"
                className="fixed inset-0 z-20 bg-gray-800 bg-opacity-75 top-[65px] transition-transform transform translate-x-0 opacity-1 lg:hidden"
            >
                <div
                    className="relative w-64 h-[100%] bg-white shadow-xl py-8"
                    ref={sidebarRef}
                    onClick={(e) => e.stopPropagation()} // Prevent event propagation
                >
                    <nav>
                        <ul className="space-y-6 px-8">
                            {navLinks}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    );
};
