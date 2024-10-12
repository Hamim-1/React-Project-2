import React from 'react';

const Partners = () => {
    const allPartners = [1, 2, 3, 4, 5, 6];
    return (
        <div className='bg-[#e6f9fd] py-10 my-20'>
            <div className="container flex flex-col space-y-10">
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>Our <span className="text-primary">Partners</span></h2>

                <div className='flex justify-center items-center flex-wrap gap-7'>
                    {
                        allPartners.map(partner => {
                            return <div className='border border-gray-300 bg-white rounded-lg w-64 h-24 flex justify-center items-center'>
                                <img src={`/partners-${partner}.png`} alt="" />
                            </div>
                        })
                    }
                </div>



            </div>
        </div>
    );
};

export default Partners;