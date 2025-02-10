import { ErrorIcon } from '@assets/icons';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <ErrorIcon className="w-[300px] md:w-[100%]" />
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-6">
                We can’t seem to find the page you’re looking for. It may have been moved or deleted.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition duration-200"
            >
                Go to Home page
            </Link>
        </div>
    );
}
