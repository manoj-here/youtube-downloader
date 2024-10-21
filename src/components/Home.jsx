import { useState } from "react";
import Preview from "./Preview";
import Droplist from "./Droplist";
import axios from "axios";


function Home(){

    //for video preview
    const [videoLink, setVideoLink] = useState('');
    const [submittedLink, setSubmittedLink] = useState('');
    const [formats, setFormats] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmittedLink(videoLink); 
        
        try {
            const response = await axios.post('http://localhost:5000/check', {
                url: videoLink,
            });

            // Set formats from the response
            setFormats(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching formats:', error);
        }
    };


    return(
        <div className="absolute flex items-center justify-start flex-col h-[calc(100%-0.75rem)] w-auto left-[50%] -translate-x-1/2 top-3 gap-10">
            <h1 className="text-ytWhite text-6xl font-['Roboto_Condensed'] font-bold">
                <span className="text-ytRed">YouTube</span> Downloader
            </h1>
            <form method="post" onSubmit={handleSubmit} className="relative h-12 w-[700px] rounded-full overflow-hidden">
                <input 
                    type="text" 
                    value={ videoLink } 
                    onChange={(e) => setVideoLink(e.target.value)}                     
                    className="h-full w-full bg-ytGray pl-6 pr-20 text-ytWhite text-xl text-ellipsis placeholder:text-[#ffffff44] focus:placeholder:text-transparent"                     
                    placeholder="enter video url" />
                <button id="urlSubmit" type="submit" className="absolute right-0 w-12 h-12 bg-[#ffffff22] border-2 border-ytGray rounded-full text-2xl text-ytWhite pt-[4px] pl-[1px] hover:brightness-125 active:brightness-150 transition-all duration-100">
                    <i className='bx bx-search'></i>
                </button>
            </form>
            <div className="flex items-center justify-between gap-5">
                <Preview videoLink={submittedLink}/>
                <div className="w-70 h-60 flex flex-col justify-between">
                    <button onClick={()=>setIsOpen((prev) => !prev)} className="relative h-28 w-60 justify-start bg-ytGray text-ytWhite text-4xl flex items-center rounded-xl active:brightness-150 hover:brightness-125 transition-all duration-100">
                        <i className='bx bx-film ml-6'></i>
                        <span id="qualityBtn" className="text-2xl pl-5">Quality</span>
                        {!isOpen ? (<i className='bx bx-caret-down absolute right-5 text-[#ffffff55]'></i>) : (<i className='bx bx-caret-up absolute right-5 text-[#ffffff55]'></i>)}
                        {isOpen && (<Droplist formats={formats} />)}
                    </button>
                    <button className="h-28 w-60 justify-start bg-ytGray text-ytWhite text-4xl flex items-center rounded-xl active:brightness-150 hover:brightness-125 transition-all duration-100">
                        <i className='bx bx-download ml-6' ></i>
                        <span className="text-2xl pl-5">Download</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;