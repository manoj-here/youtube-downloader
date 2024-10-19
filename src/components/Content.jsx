import { useState } from "react";
import Preview from "./Preview";
import Droplist from "./Droplist";


function Content(){

    //for video preview
    const [videoLink, setVideoLink] = useState('');
    const [submittedLink, setSubmittedLink] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmittedLink(videoLink); // Update the submitted link

        try {
            const response = await fetch('http://localhost:3000/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify the content type
                },
                body: JSON.stringify({ url: videoLink }), // Send the video URL as JSON
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Download started:', data);
                // Set the preview URL for the player
                setPreviewUrl(videoLink);
            } else {
                console.error('Error downloading video');
            }
        } 
        catch (error) {console.error('Error:', error);}
    };


    //for dropdown
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="absolute flex items-center justify-start flex-col h-[calc(100%-0.75rem)] w-full top-3 gap-10">
            <h1 className="text-ytWhite text-6xl font-['Roboto_Condensed'] font-bold">
                <span className="text-ytRed">YouTube</span> Downloader
            </h1>
            <form onSubmit={handleSubmit} className="relative h-12 w-[700px] rounded-full overflow-hidden">
                <input type="text" value={ videoLink } onChange={(e) => setVideoLink(e.target.value)} id="ytUrl" className="h-full w-full bg-ytGray pl-6 text-ytWhite text-xl placeholder:text-[#ffffff44] focus:placeholder:text-transparent" placeholder="enter video url" />
                <button id="urlSubmit" type="submit" className="absolute right-0 w-12 h-12 bg-[#ffffff22] border-2 border-ytGray rounded-full text-2xl text-ytWhite pt-[4px] pl-[1px] hover:brightness-125 active:brightness-150 transition-all duration-100"><i class='bx bx-search'></i></button>
            </form>
            <div className="flex items-center justify-between gap-5">
                <Preview videoLink={submittedLink}/>
                <div className="w-70 h-60 flex flex-col justify-between">
                    <button onClick={()=>setIsOpen((prev) => !prev)} className="relative h-28 w-60 justify-start bg-ytGray text-ytWhite text-4xl flex items-center rounded-xl active:brightness-150 hover:brightness-125 transition-all duration-100">
                        <i className='bx bx-film ml-6'></i>
                        <span id="qualityBtn" className="text-2xl pl-5">Quality</span>
                        {!isOpen ? (<i className='bx bx-caret-down absolute right-5 text-[#ffffff55]'></i>) : (<i className='bx bx-caret-up absolute right-5 text-[#ffffff55]'></i>)}
                        {isOpen && (<Droplist/>)}
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

export default Content;