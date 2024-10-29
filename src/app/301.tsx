import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Redirect301() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the new page after a short delay
        const timer = setTimeout(() => {
            router.replace('/');
        }, 3000); // Delay of 3 seconds

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">301 - Moved Permanently</h1>
            <p className="text-lg text-gray-600 mb-6">
                This page has moved to a new location. You will be redirected shortly.
            </p>
            <p>
                The page you are looking for has been moved to a new location. We are redirecting you to the updated page. If you aren’t redirected automatically, please {' '}
                <a href="/" className="text-blue-600 underline">
                    click here
                </a>.
            </p>
        </div>
    );
}
