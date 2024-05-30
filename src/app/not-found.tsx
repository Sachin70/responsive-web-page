'use client';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)]">
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600">Something Went Wrong!</p>
        </div>
    );
};

export default NotFound;
