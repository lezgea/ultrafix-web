import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">
                The page you’re looking for doesn’t exist.
            </p>
            <Link href="/" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primaryDark">
                Return to Home
            </Link>
        </div>
    );
};

export default NotFound;
