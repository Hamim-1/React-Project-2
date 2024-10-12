import React from 'react';

const Footer = () => {
    return (
        <div className='container flex flex-col'>
            <div className='flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between items-center my-16'>
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                    AI GoverningDocs
                </h1>
                <div className='flex space-x-2'>
                    <img src="/fb.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <img src="/in.png" alt="" />
                    <img src="/x.png" alt="" />
                </div>
            </div>

            <p className='text-accent text-base sm:text-lg text-center border-t-2 border-primary pb-5 pt-8'>Ai GoverningDocs 2024. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;