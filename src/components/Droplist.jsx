import list from "../assets/list.json"

function Droplist(){
    return(
        <div className="absolute w-60 bg-ytGray top-32 ml-0 rounded-xl p-3 ">
            {list.map((item, i)=>(
                <button className="w-full h-20 hover:bg-[#ffffff22] rounded-lg flex justify-start items-center pl-5 gap-6 transition-all duration-100">
                    <i className={`${item.icon}`}></i>
                    <span className="text-2xl">{item.quality}</span>
                </button>
            ))}
        </div>
    );
}

export default Droplist;