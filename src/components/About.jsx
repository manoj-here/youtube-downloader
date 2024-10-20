import socials from "../assets/socials.json"

function About(){
    return(
        <div className="absolute flex justify-start flex-col h-[calc(100%-0.75rem)] w-full pl-72 pt-20 top-3 gap-10 text-ytWhite">
            <span className="text-4xl block font-['roboto_condensed'] font-bold">About this app</span>
            <p className="text-xl">This YouTube Downloader is a free tool designed to help you easily download YouTube videos. <br /> Whether you're looking to save videos for offline viewing or extract audio, this app makes it simple. <br /> You can choose from different formats, including MP3 for audio and resolutions like 720p or 1080p for video. <br /> No ads, no unnecessary clicks—just paste the link, select your preferred quality, and download! </p>
            <span className="text-3xl font-['roboto_condensed'] font-bold mt-10">Developer</span>
            <p className="text-xl">Hi, I'm Manoj Joshi, a passionate developer working on creating simple, useful tools like this one. <br />Currently studying engineering and honing my coding skills in web development.</p>
            <div className="flex gap-4">
                {socials.map((item,i)=>(
                    <button 
                        key={i} 
                        onClick={() => window.open(item.link, '_blank')} 
                        className="h-16 w-16 grid place-items-center text-3xl bg-ytGray text-ytWhite rounded-full transition-all duration-100 hover:scale-110 hover:brightness-125 active:brightness-150"
                    >
                        <i className={`${item.icon}`}></i>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default About;