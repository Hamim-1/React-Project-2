import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isNavbarOpened, setIsNavbarOpened] = useState(false);
    useEffect(() => {
        if (isNavbarOpened) {
            document.body.style.overflow = 'hidden';

        } else {
            document.body.style.overflow = '';

        }
    }, [isNavbarOpened])
    return (
        <>
            <div className='container bg-white rounded-full flex justify-between items-center my-5 box-shadow'>
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                    GoverningDocs
                </h1>

                <div className='hidden lg:flex space-x-3 text-sm text-accent'>
                    <p className='cursor-pointer hover:text-primary hover:underline'>Problem & Solution</p>
                    <p className='cursor-pointer hover:text-primary hover:underline'>Industries We Serve</p>
                    <p className='cursor-pointer hover:text-primary hover:underline'>How It Works</p>
                    <p className='cursor-pointer hover:text-primary hover:underline'>Testimonials</p>
                    <p className='cursor-pointer hover:text-primary hover:underline'>FAQs</p>
                </div>

                <div className='flex items-center space-x-5'>

                    <div className="cursor-pointer space-y-1 lg:hidden" onClick={() => setIsNavbarOpened(true)}>
                        <span className="block w-6 h-0.5 bg-black" />
                        <span className="block w-6 h-0.5 bg-black" />
                        <span className="block w-6 h-0.5 bg-black" />
                    </div>

                    <button className='custom-button gradient-bg'>Get Started Today</button>
                </div>
            </div>

            {/* resposive menu */}
            <div className={`flex flex-col space-y-5 bg-gray-900/80 text-white z-10 absolute top-0 ${isNavbarOpened ? '-left-0' : '-left-full'} p-10 h-screen w-full transition-all duration-500`}>
                <div className='flex justify-between items-center'>
                    <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                        GoverningDocs
                    </h1>
                    <span className='text-2xl font-bold cursor-pointer' onClick={() => setIsNavbarOpened(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    </span>
                </div>
                <p className='cursor-pointer hover:text-primary hover:underline'>Problem & Solution</p>
                <p className='cursor-pointer hover:text-primary hover:underline'>Industries We Serve</p>
                <p className='cursor-pointer hover:text-primary hover:underline'>How It Works</p>
                <p className='cursor-pointer hover:text-primary hover:underline'>Testimonials</p>
                <p className='cursor-pointer hover:text-primary hover:underline'>FAQs</p>
            </div>
        </>
    );
};

export default Navbar;