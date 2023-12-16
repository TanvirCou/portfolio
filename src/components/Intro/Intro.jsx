import img from '../../assets/tnvr.png';

const Intro = () => {
    const socialData = [
        {
            id: "Linkedin",
            logo: "logo-linkedin",
            link: "https://www.linkedin.com/in/tnvr-kazi/",
        },
        {
            id: "github",
            logo: "logo-github",
            link: "https://github.com/TanvirCou",
        },
        {
            id: "fb",
            logo: "logo-facebook",
            link: "https://www.facebook.com/ahmed.tnvr.999",
        },
        {
            id: "instagram",
            logo: "logo-instagram",
            link: "https://www.instagram.com/tnvr_ahmed",
        },
    ]
    return (
        <div className='w-full h-screen snap-start pt-[70px]' id='intro'>
            <div className='flex max-md:flex-col-reverse max-md:items-center w-full md:h-full'>
                <div className='lg:w-1/2 md:w-[45%] w-full max-md:my-16 max-md:text-center'>
                    <div className=' lg:h-[500px] md:h-[460px] grid place-content-center'>
                        <p className='font-bold lg:text-3xl text-2xl'>Hi There, I&#39;m</p>
                        <p className='font-bold lg:text-6xl text-5xl md:py-3 py-2'>Tanvir Ahmed</p>
                        <p className='font-bold lg:text-3xl text-2xl text-teal-600'>MERN Stack Developer</p>

                    </div>
                    <div className='flex justify-center max-md:mt-6'>
                        {socialData.map(data => (
                            <a type='button' href={data.link} target='_blank' rel="noreferrer" key={data.id} className='lg:text-4xl md:text-3xl text-3xl md:mr-7 max-md:mx-2'>
                                <ion-icon name={data.logo}></ion-icon>
                            </a>
                        ))}
                    </div>
                </div>
                <div className='lg:w-1/2 md:w-[55%] w-full'>
                    <div className='w-full md:h-full h-[350px] overflow-hidden'>
                        <div className=' bg-teal-500 flex justify-center lg:items-end md:items-center items-start rounded-[50%] xl:w-[760px] lg:w-[700px] md:w-[600px] mx-auto sm:w-[500px] overflow-hidden h-[500px] md:h-[700px]'>
                            <img src={img} alt="" className='lg:h-[90%] md:h-[85%] mt-0 md:mt-28 lg:mt-0 xl:mt-0 xl:pr-0 lg:pr-6 md:pr-12 pr-0 h-[400px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;