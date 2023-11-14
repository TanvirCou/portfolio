/* eslint-disable react/prop-types */

const PortfolioList = ({item, active, setSelected}) => {
    return (
        <li className={`mx-2 ${active ? 'bg-teal-900 text-white' : 'bg-white text-black'} cursor-pointer  p-1 rounded`} onClick={()=>setSelected(item.id)}>{item.title}</li>
    );
};

export default PortfolioList;