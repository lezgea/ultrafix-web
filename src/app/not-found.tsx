import { ErrorIcon } from '@assets/icons';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <ErrorIcon className="w-[300px] mb-0 md:w-[100%] md:mb-20" />
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 text-center mb-6">
                The page you’re looking for doesn’t exist.
            </p>
            <Link href="/" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primaryDark">
                Return to Home
            </Link>
        </div>
    );
};

export default NotFound;
