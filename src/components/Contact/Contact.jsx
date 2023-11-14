import { useRef } from 'react';
import img from '../../assets/shake.svg';

const Contact = () => {
    const emailRef = useRef();
    const messageRef = useRef();

    const handleContact = () => {
        alert("Thanks,I'll reply you ASAP.");
        emailRef.current.value = "";
        messageRef.current.value = "";
    };

    return (
        <div className='md:flex max-md:flex-col h-screen snap-start md:pt-24 pt-20' id='contact'>
            <div className='lg:w-1/2 md:w-[55%] w-full'>
                <img src={img} alt="" className='lg:h-full md:h-[500px] h-48 max-md:w-full' />
            </div>
            <div className='lg:w-1/2 md:w-[45%] w-full flex flex-col items-center md:pt-16 pt-2'>
                <p className='md:text-3xl text-xl font-bold'>Contact</p>
                <form action="https://formsubmit.co/4982afa8281417deae6920b83f5718fd" method="POST" target='_blank' onSubmit={handleContact}>
                    <div className='w-full md:my-4 my-2 max-md:mb-4'>
                        <input type="email" ref={emailRef} name='email' required placeholder='Email address' className='lg:w-80 md:w-72 w-80 h-10 px-1 md:text-md text-sm placeholder:font-semibold focus:outline-teal-400 rounded shadow-md bg-gray-100' />
                    </div>
                    <div className='w-full my-2'>
                        <textarea required name='message' ref={messageRef} placeholder='Message' className='lg:w-80 md:w-72 w-80 px-1 md:h-44 h-36 md:text-md text-sm placeholder:font-semibold focus:outline-teal-400 rounded shadow-md bg-gray-100'></textarea>
                    </div>
                    <div>
                        <button type='submit' className='bg-teal-500 hover:bg-teal-600 w-full py-2 rounded text-white md:text-md text-sm font-semibold'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;