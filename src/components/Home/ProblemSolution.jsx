import React from 'react';
import ProblemSolutionCard from './ProblemSolutionCard';

const ProblemSolution = () => {
    const leftArrow = '<';
    const rightArrow = '>';
    const problemSolutionsData = [
        {
            heading: 'Problem', img: '/public/problem.svg', details: `Managing legal documents can
             be complex, time-consuming,
              and error-prone. \n
               Outdated methods and manual
  processes put your business at
                risk`},
        {
            heading: 'Solution', img: '/public/solution.svg', details: `Ai GoverningDocs offers a cutting-edge solution to manage, generate, and automate legal documents with ease. \n
             Our  AI-driven platform ensures compliance, reduces errors, and saves time.`
        },
        {
            heading: 'Key Features', img: '/public/key-features.svg', details: `Automatically generate legal documents tailored to your specific needs.`
        },
        {
            heading: 'Compliance Management', img: '/public/compliance-management.svg', details: `Ensure all your documents meet the latest regulatory standards.`
        },
    ]
    return (
        <div className='my-20 container flex flex-col space-y-10'>
            <div className='flex flex-col md:flex-row space-y-4 justify-between items-center'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Problem & <span className="text-primary">Solution</span></h2>

                <div className='flex space-x-5'>
                    <button className='text-primary  shadow-2xl shadow-black border border-gray-100 text-center rounded-full px-2.5 py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg></button>






                    <button className='text-white gradient-bg shadow-2xl border border-gray-100 text-center rounded-full px-2.5 py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </button>
                </div>
            </div>
            <div className=" grid grid-cols-1 xs:grid-cols-2  cs:grid-cols-3  xl:grid-cols-4 gap-8">
                {problemSolutionsData.map((problemSolution, i) => {
                    return <ProblemSolutionCard data={problemSolution} key={i} />
                })}
            </div>

        </div>
    );
};

export default ProblemSolution;