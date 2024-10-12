import React, { act, useState } from 'react';
import ReviewCard from './ReviewCard';
import ReviewStar from './ReviewStar';

const ClientReviews = () => {
    const clientReviews = [
        { name: 'David', img: '/public/david.png', shortReview: 'Highly Recommend!', fullReview: 'The service was user-friendly and met all my expectations.' },
        { name: 'John Smith', img: '/public/john-smith.png', shortReview: 'It Was An Amazing Experience!', fullReview: 'The AI features saved us countless hours and ensured our compliance was spot on.' },
        { name: 'Ronald Richards', img: '/public/ronald-richards.png', shortReview: 'Outstanding Support!', fullReview: 'The customer support team was quick to resolve my issues.' },
    ]
    const [activeReview, setActiveReview] = useState(1);
    return (
        <div className='bg-[#f6f6f6] py-5'>

            <div className="container">
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>Our Client <span className="text-primary">Reviews From</span></h2>

                <div className='grid  grid-cols-1 md:grid-cols-2 my-10 gap-10 items-center'>

                    <div className='flex space-x-5 w-full'>
                        <div className='h-[358px] w-2 rounded-md bg-gray-300 relative'>
                            <div className={`absolute top-0 left-0 w-full h-1/3 rounded ${activeReview === 0 ? 'bg-primary' : 'bg-transparent'}`}></div>
                            <div className={`absolute top-1/3 left-0 w-full h-1/3 rounded ${activeReview === 1 ? 'bg-primary' : 'bg-transparent'}`}></div>
                            <div className={`absolute top-2/3 left-0 w-full h-1/3 rounded ${activeReview === 2 ? 'bg-primary' : 'bg-transparent'}`}></div>
                        </div>
                        <div className='flex flex-col space-y-5 w-[90%] lg:w-3/4'>
                            {clientReviews.map((review, i) => {
                                return (<div className={`flex space-x-5 items-center border border-primary rounded-3xl py-1 cursor-pointer ${i === activeReview ? 'gradient-bg text-white' : 'bg-transparent text-accent'}`} onClick={() => setActiveReview(i)}>
                                    <img src={review.img} alt="" />
                                    <div className='flex flex-col items-center space-y-2 font-medium'>
                                        <p>{review.name}</p>
                                        <p>Happy Client</p>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className='ml-8 md:ml-0'>
                        {
                            clientReviews.map((review, i) => (
                                <div div className={`flex-col space-y-5 ${i === activeReview ? 'flex' : 'hidden'}`}>
                                    <h2 className='text-xl font-medium'>{review.shortReview}</h2>
                                    <div className='flex space-x-1'>
                                        <ReviewStar />
                                        <ReviewStar />
                                        <ReviewStar />
                                        <ReviewStar />
                                        <ReviewStar />
                                    </div>
                                    <p className='text-accent'>{review.fullReview}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ClientReviews;