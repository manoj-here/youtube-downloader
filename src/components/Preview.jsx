import ReactPlayer from "react-player";

function Preview({ videoLink }){
    return(
        <div className="bg-ytGray h-60 w-96 rounded-lg overflow-hidden border-ytGray border-4 box-border">
            <ReactPlayer url={videoLink} controls height='100%' width='100%'/>
        </div>
    );
}

export default Preview;