import Link from 'next/link';

export default function Forbidden() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4">403</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Access Forbidden</h2>
            <p className="text-lg text-gray-600 mb-6">
                You don’t have permission to access this page. Please check your credentials or contact the site administrator if you believe this is an error.
            </p>
            <div className="flex space-x-4">
                <Link
                    href="/sign-in"
                    className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition duration-200"
                >
                    Log in
                </Link>
                <Link
                    href="/"
                    className="px-6 py-3 bg-gray-600 text-white text-lg rounded hover:bg-gray-700 transition duration-200"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
}
