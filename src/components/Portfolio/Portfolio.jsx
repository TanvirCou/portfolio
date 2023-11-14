import { useEffect, useState } from 'react';
import PortfolioList from './PortfolioList';
import { featuredData, mernStackData, reactJsData, vanillaJsData, webDesignData } from '../../data/data';

const Portfolio = () => {
    const [selected, setSelected] = useState('featured');
    const [data, setdata] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "mernStack",
            title: "MERN-Stack",
        },
        {
            id: "reactJs",
            title: "React-Js",
        },
        {
            id: "vanillaJs",
            title: "Vanilla-Js",
        },
        {
            id: "webDesign",
            title: "Web-Design",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setdata(featuredData);
                break;
            case "mernStack":
                setdata(mernStackData);
                break;
            case "reactJs":
                setdata(reactJsData);
                break;
            case "vanillaJs":
                setdata(vanillaJsData);
                break;
            case "webDesign":
                setdata(webDesignData);
                break;
            default:
                setdata(featuredData);
                break;
        }
    }, [selected])


    return (
        <div className=' h-screen snap-start md:pt-24 pt-20' id='portfolio'>
            <div>
                <p className='md:text-4xl text-2xl font-bold text-center'>Portfolio</p>
                <p className='text-center md:text-sm text-xs text-gray-500 font-semibold pt-1'>My Projects</p>
                <ul className='flex flex-wrap md:mx-0 mx-12 justify-center text-md font-semibold my-3'>
                    {
                        list.map(item => <PortfolioList key={item.id} item={item} active={selected === item.id} setSelected={setSelected}></PortfolioList>)
                    }
                </ul>
            </div>
            <div className='flex justify-center py-4 max-md:py-1'>
                <div className='flex flex-wrap xl:w-2/3 lg:w-4/5 md:w-11/12 sm:w-4/5 max-sm:w-full justify-center items-center '>
                    {data.map(dataItem => (
                        <a href={dataItem.liveLink} target='_blank' rel="noreferrer" key={dataItem.id}>
                            <div className='mx-4 mb-6 grid w-fit h-fit shadow-md rounded cursor-pointer justify-items-center relative place-items-center transition-all duration-300 ease-in hover:bg-teal-900'>
                                <img src={dataItem.img} alt="" className=' object-fill md:w-52 md:h-32 w-40 h-24 z-10 hover:z-0 hover:opacity-20' />
                                <p className='absolute md:text-lg text-md hover:z-10 text-white font-semibold'>{dataItem.title}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;