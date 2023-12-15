import { frontendSkill, backendSkill } from '../../data/skill';

const Skills = () => {

    return (
        <div className=' h-screen snap-start md:pt-24 pt-24' id='skills'>
            <div>
                <p className='md:text-4xl text-2xl font-bold text-center'>Skills</p>
                <p className='md:text-md text-sm  md:py-2 py-1 font-semibold text-gray-400 text-center'>My technical level</p>
            </div>
            <div className='flex justify-center'>
                <div className='xl:w-2/3 lg:w-11/12 md:w-full sm:w-4/6 w-11/12 md:flex max-md:flex-col md:pt-6 pt-2'>
                    <div className='md:w-1/2 max-md:w-full max-sm:pb-4 flex justify-center'>
                        <div className='w-[90%] shadow-lg py-6 border border-1 rounded' >
                            <p className='md:text-2xl max-md:text-xl font-semibold text-center md:pb-6 pb-4'>Frontend Skills</p>
                            <div className='grid md:gap-y-8 max-md:gap-y-5 grid-cols-2 '>
                                {frontendSkill.map(data => (
                                    <div key={data.name} className=' grid place-content-center'>
                                        <p className='flex items-center text-teal-900'>
                                            <ion-icon name="checkmark-circle"></ion-icon>
                                            <span className='font-semibold text-black md:text-lg max-md:text-md pl-2'>{data.name}</span>
                                        </p>
                                        <p className='md:text-sm max-md:text-xs text-gray-400 px-6 font-semibold'>{data.level}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 max-md:w-full max-sm:pb-4 flex justify-center'>
                        <div className='w-[90%] shadow-lg h-fit py-6 border border-1 rounded'>
                            <p className='md:text-2xl max-md:text-xl font-semibold text-center md:pb-6 pb-4'>Backend Skills</p>
                            <div className='grid md:gap-y-8 max-md:gap-y-5 grid-cols-2 '>
                                {backendSkill.map(data => (
                                    <div key={data.name} className='grid place-content-center'>
                                        <p className='flex text-teal-900 items-center'><ion-icon name="checkmark-circle"></ion-icon><span className='font-semibold text-black md:text-lg max-md:text-md pl-2'>{data.name}</span></p>
                                        <p className='md:text-sm max-md:text-xs text-gray-400 px-6 font-semibold'>{data.level}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;