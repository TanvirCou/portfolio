import { useState } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-20'>
            <div className={`flex items-center transition-all duration-700 ease-in justify-between ${open ? 'bg-teal-900' : 'bg-white'} py-4 md:px-20 px-7`}>
                <div className='flex items-center'>
                    <div className={`font-bold text-3xl cursor-pointer items-center font-[Poppins] ${open ? 'text-white' : 'text-teal-900'}`}>
                        <a href="/#intro" className='font-[Poppins]'>tanvir</a>
                    </div>
                    <div className={`mt-1 flex items-center md:mx-12 mx-4 text-md  max-md:hidden font-semibold ${open ? 'text-white' : 'text-teal-900'}`}>
                        <ion-icon name="mail-outline"></ion-icon>
                        <span className='px-1'>ahmed.tnvr999@gmail.com</span>
                    </div>
                </div>

                <div onClick={() => setOpen(!open)} className={`text-4xl absolute right-8 top-[17px] cursor-pointer  ${open ? 'text-white' : 'text-teal-900'}`}>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`pb-2 absolute ${open ? 'bg-teal-900' : 'bg-white'} z-[-1] right-0 w-fit md:w-auto px-20 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
                    <li className='text-lg font-semibold my-7' onClick={() => setOpen(!open)}>
                        <a href='/#intro' className='text-white hover:text-gray-400 duration-500'>Intro</a>
                    </li>
                    <li className='text-lg font-semibold my-7' onClick={() => setOpen(!open)}>
                        <a href='/#skills' className='text-white hover:text-gray-400 duration-500'>Skills</a>
                    </li>
                    <li className='text-lg font-semibold my-7' onClick={() => setOpen(!open)}>
                        <a href='/#portfolio' className='text-white hover:text-gray-400 duration-500'>Portfolio</a>
                    </li>
                    <li className='text-lg font-semibold my-7' onClick={() => setOpen(!open)}>
                        <a href='/#works' className='text-white hover:text-gray-400 duration-500'>Works</a>
                    </li>
                    <li className='text-lg font-semibold my-7' onClick={() => setOpen(!open)}>
                        <a href='/#contact' className='text-white hover:text-gray-400 duration-500'>Contact</a>
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default Navbar;