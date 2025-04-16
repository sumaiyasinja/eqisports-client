import React from 'react';

const Title = ({title}) => {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-5 md:mb-8 text-center text-purple-800 dark:text-white  rounded-3xl py-2'>{title}</h2>
        </div>
    );
};

export default Title;