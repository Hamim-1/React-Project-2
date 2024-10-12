import React, { useState } from 'react';

const Faq = () => {
    const [openedQuestion, setOpenedQuestion] = useState(undefined);
    const FAQ = [
        { question: 'Is my data secure?', answer: 'We cover a wide range of documents, including contracts, NDAs, compliance reports, and more.' },
        { question: 'What types of documents can Ai GoverningDocs generate?', answer: 'We cover a wide range of documents, including contracts, NDAs, compliance reports, and more.' },
        { question: 'Can I customize the documents?', answer: 'We cover a wide range of documents, including contracts, NDAs, compliance reports, and more.' },

    ]
    const toggleOpenQuestion = (index) => {
        if (openedQuestion === index) {
            setOpenedQuestion(undefined);
        } else {
            setOpenedQuestion(index);
        }
    }
    return (
        <div>
            <div className="container flex flex-col space-y-10">
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>Our <span className="text-primary">Partners</span></h2>

                <div className='flex flex-col space-y-5'>

                    {
                        FAQ.map((faq, i) => {
                            return <div key={i} className={`flex flex-col space-y-8 shadow-xl border border-gray-200 px-10 py-8 rounded-2xl text-accent overflow-hidden transition-all duration-300 ${i === openedQuestion ? 'h-44 sm:h-40' : 'h-24'}`}>
                                <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleOpenQuestion(i)}>
                                    <p className='text-lg lg:text-2xl font-semibold'>{faq.question}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="currentColor" className={`size-6 text-primary transition-all duration-300 ${i === openedQuestion ? ' rotate-180' : 'rotate-0'}`}>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </div>
                                <p>{faq.answer}</p>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Faq;