import React from 'react';

const ProblemSolutionCard = ({ data }) => {
    const { heading, img, details } = data;
    return (
        <div className='flex flex-col space-y-3 rounded-2xl shadow-xl border border-gray-300 p-4 h-[340px] w-[255px] mx-auto hover:bg-primary hover:text-white group transition-colors'>
            { }
            <div className='bg-primary p-3 rounded-full w-fit'>
                <img src={img} alt="" className='w-10' />
            </div>
            <p className='text-xl font-semibold'>{heading}</p>
            <p className='text-accent group-hover:text-white whitespace-pre-line text-[15px]'>{details}</p>
        </div>
    );
};

export default ProblemSolutionCard;