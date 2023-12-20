import { useState } from 'react';
import { featuredData } from '../../data/data';

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleArrowClick = (way) => {
        if (way === 'left') {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : featuredData.length - 1);
        } else {
            setCurrentSlide(currentSlide < featuredData.length - 1 ? currentSlide + 1 : 0);
        }
    }
    return (
        <div className='lg:h-screen h-screen snap-start flex relative justify-center items-center bg-teal-500 lg:pt-20' id='works'>
            <div className={`lg:h-[70%] h-fit absolute flex left-0 transition-all duration-[2000ms] ease-out `} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {featuredData.map(data => (
                    <div key={data.id} className='w-screen lg:flex lg:justify-center lg:items-center '>
                        <div className='lg:flex max-lg:flex-col max-lg:flex max-lg:py-2 xl:w-2/3 lg:w-4/5 w-full lg:h-full h-[550px] rounded bg-white'>
                            <div className='lg:w-3/5 w-full'>
                                <div className='lg:basis-3/5 basis-full lg:flex lg:items-center w-full lg:h-full px-8'>
                                    <div className='max-lg:flex max-lg:justify-center lg:mb-0 md:mb-2 max-md:pt-6'>
                                        <img src={data.img} alt="" className='lg:h-80 md:h-60 sm:h-60 min-[320px]:h-56 lg:w-full md:w-2/3 max-md:w-4/5 object-fill rounded  lg:rotate-6' />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:basis-2/5 basis-full max-lg:flex max-lg:justify-center'>
                                <div className='flex flex-col justify-center lg:w-full md:w-[65%] sm:w-[75%] min-[320px]:w-[75%] lg:h-full px-4'>
                                    <p className='font-bold md:text-2xl max-md:text-xl'>{data.title}</p>
                                    <p className='text-sm text-gray-400 font-semibold md:pt-4 pt-2'>{data.desc}</p>
                                    <div className='py-2'>
                                        <a type='button' href={data.githubClient} target='_blank' rel="noreferrer" className='bg-teal-500 hover:bg-teal-600 p-2 rounded text-white font-semibold md:text-md max-md:text-sm'>Github Client</a>
                                        {data.githubServer ? <a type='button' href={data.githubServer} target='_blank' rel="noreferrer" className='bg-teal-500 hover:bg-teal-600 p-2 rounded text-white font-semibold md:text-md max-md:text-sm mx-4'>Github Server</a> : ""}
                                    </div>
                                    <a type='button' href={data.liveLink} target='_blank' rel="noreferrer" className='bg-teal-500 hover:bg-teal-600 p-2 w-fit rounded text-white font-semibold md:text-md max-md:text-sm'>Live Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute cursor-pointer text-7xl lg:top-72 max-md:text-5xl  xl:right-12 lg:right-4 max-lg:right-0 lg:text-white' onClick={() => handleArrowClick()}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
            <div className='absolute cursor-pointer text-7xl lg:top-72 max-md:text-5xl xl:left-12 lg:left-3 max-lg:left-0 lg:text-white' onClick={() => handleArrowClick('left')}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
        </div>
    );
};

export default Works;