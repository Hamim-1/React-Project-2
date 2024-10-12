import React from 'react';

const Note = () => {
    return (
        <div className='container gradient-bg my-20 rounded-2xl text-white'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 py-10 pl-10 items-center'>
                <div className='flex flex-col space-y-3 md:col-span-9'>
                    <h1 className="font-semibold text-3xl lg:text-5xl md:leading-[50px] lg:leading-[65px]">
                        Ready to Simplify Your Document  <br className='hidden sm:block' />Management?
                    </h1>
                    <p>Sign up today and experience the power of AI-driven legal <br className='hidden md:block' /> documentation.</p>
                </div>
                <div className='md:col-span-3 flex justify-center items-center'>
                    <button className='rounded-full font-semibold px-5 py-3 text-xs sm:text-base bg-white w-fit text-black mx-auto'>Get Started Now</button>
                </div>
            </div>

        </div>
    );
};

export default Note;