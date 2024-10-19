function Sidebar({ isExpanded }){
    return(
        <div className={`pt-5 ${isExpanded ? 'w-56' : 'w-24'} h-full flex items-center justify-start flex-col box-border z-10`}>
            <button id="home" className={`h-20 ${isExpanded ? 'w-52 justify-start pl-6' : 'w-20 justify-center'} bg-transparent hover:bg-ytGray text-ytWhite text-4xl flex items-center rounded-xl active:brightness-150`}>
                <i className='bx bxs-home' ></i>
                {isExpanded && <span className="ml-4 text-2xl font-['Roboto_Condensed']">Home</span>}
            </button>
            <button id="home" className={`h-20 ${isExpanded ? 'w-52 justify-start pl-6' : 'w-20 justify-center'} bg-transparent hover:bg-ytGray text-ytWhite text-4xl flex items-center rounded-xl active:brightness-150`}>
                <i className='bx bxs-user'></i>
                {isExpanded && <span className="ml-4 text-2xl font-['Roboto_Condensed']">About</span>}
            </button>
        </div>
    );
}

export default Sidebar;