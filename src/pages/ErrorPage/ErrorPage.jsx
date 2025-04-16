import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <h2 className='text-3xl font-bold '>404!</h2>
            <p  className='text-3xl font-bold'>Page not found</p>
            <p  className=''>Sorry, the page you are looking for does not exist.</p>
            <p  className=''>Please check the URL or go back to the homepage.</p>
            <Link to="/" className=' text-blue-500 font-semibold underline '>Go to Home</Link>

        </div>
    );
};

export default ErrorPage;