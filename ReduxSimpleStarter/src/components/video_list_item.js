import React, { Fragment } from 'react';

const VideoListItem = ({video}) => {
    //const video = props.video == ({video}) 이것과 같음 
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <Fragment>
            <li className="list-group-item">
                <div className="video-list mdeia">
                    <div className = "media-lieft">
                        <img className= "media-object" src={imgUrl} alt="thumbnails"/> 
                    </div>
                </div>
                <div className = "media-body">
                    <div className = "media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </li>
        </Fragment>
    )
}

export default VideoListItem