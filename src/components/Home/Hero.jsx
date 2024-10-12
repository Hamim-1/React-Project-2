import React from 'react';
const Hero = () => {
    return (
        <>
            <div className="container flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between items-center my-24">
                <div className='flex flex-col space-y-7 md:space-y-10'>
                    <h1 className="font-space-grotesk font-bold text-2xl md:text-4xl lg:text-6xl md:leading-[60px] lg:leading-[76.56px] text-secondary capitalize max-w-[593px]">
                        Simplify your real estate document analysis
                    </h1>
                    <p className="font-semibold text-base md:text-lg lg:text-xl  max-w-[519px]">
                        Streamline, Automate, and Secure Your Business Documents with Ai
                        GoverningDocs
                    </p>

                    <button className="custom-button w-fit gradient-bg">Get Started Today</button>
                </div>
                <div>
                    <img src="/public/hero-side.svg" alt="" className='w-[90%] mx-auto' />
                </div>
            </div>

            <div style={{ backgroundImage: `url(hero-bg.svg)` }} className='w-full h-full absolute top-0 left-0 -z-10'></div>
        </>
    );
};

export default Hero;