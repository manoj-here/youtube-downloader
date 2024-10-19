// navigation bar component 

function Nav({ toggleSidebar }){
    return(
        <nav className='absolute top-0 left-0 h-20 w-full pl-5 flex items-center gap-6'>
          <button onClick={toggleSidebar} className='h-12 w-12 bg-transparent hover:bg-ytGray text-ytWhite text-4xl grid place-items-center rounded-full active:brightness-150'>
            <i className='bx bx-menu'></i>
          </button>
          <img src="/logo.svg" alt="youtube downloader" className='h-8 '/>
        </nav>
    );
}

export default Nav;
