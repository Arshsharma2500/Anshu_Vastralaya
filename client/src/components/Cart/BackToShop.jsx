import React, { useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';

const MoveArrowButton = () => {
    const [arrowPosition, setArrowPosition] = useState(false);

    const handleClick = () => {
        setArrowPosition(!arrowPosition);
    };

    return (
        <button 
            className='flex flex-wrap gap-2 items-center p-2'
            onClick={handleClick}
        >
            <GoArrowLeft className={`bg-gray-200 text-orange-700 transform scale-100 transition-transform duration-300 ${arrowPosition ? '-translate-x-4' : 'translate-x-0'}`} />
            <p className='text-orange-700 font-serif font-lg'>Back To Shop</p>
        </button>
    );
};

export default MoveArrowButton;
