import ReactPlayer from "react-player";

function Preview({ videoLink }){
    return(
        <div className="bg-ytGray h-60 w-96 rounded-lg overflow-hidden border-ytGray border-4 box-border relative">
            <span className="text-[#ffffff22] text-4xl font-bold absolute w-full text-center top-1/2 -translate-y-1/2 z-10">Preview</span>
            <ReactPlayer url={videoLink} controls height='100%' width='100%' className='react-player'/>
        </div>
    );
}

export default Preview;