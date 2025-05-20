import React from 'react'

function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-32 h-32 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <p className='mt-3'>Please Wait...</p>
        </div>
    )
}

export default Loading