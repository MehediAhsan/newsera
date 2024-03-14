import React from 'react';

const ErrorMessage = ({ error, reset }) => {
    return (
        <div className="absolute bg-gray-200 z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 text-center">
            <h2 className='text-red-500'>Something went wrong!</h2>
            <p className='text-yellow-600 my-5 text-xl font-semibold'>{error.message}</p>
            <button className="rounded-lg border px-2 py-1 bg-primary text-white" onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
};

export default ErrorMessage;