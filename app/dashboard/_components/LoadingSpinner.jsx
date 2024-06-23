import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = ({ loading }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50 ${loading ? 'block' : 'hidden'}`}>
            <ClipLoader color='#4A90E2' loading={loading} size={50} />
        </div>
    );
};

export default LoadingSpinner;