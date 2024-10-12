import React from 'react';
import ReviewStar from './ReviewStar';

const ReviewCard = ({ data, active }) => {
    const { name, img, shortReview, fullReview } = data;

    return (
        <>
            <div className='flex space-x-5'>
                <div>

                </div>
                <div className='flex flex-col space-y-5'>

                </div>
            </div>
            <div className='flex flex-col space-y-5'>
                <h2 className='text-xl font-medium'>{shortReview}</h2>
                <div className='flex space-x-1'>
                    <ReviewStar />
                    <ReviewStar />
                    <ReviewStar />
                    <ReviewStar />
                    <ReviewStar />
                </div>
            </div>
        </>
    );
};

export default ReviewCard;