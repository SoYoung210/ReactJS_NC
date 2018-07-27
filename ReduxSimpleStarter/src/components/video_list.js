import React from 'react';
import VideoListItem from './video_list_item'
//함수형으로 선언하면 index.js 에서 <videolist video = {this.//}
//으로 넘긴게 여기의 괄호로 들어옴. 바로 아래! 
//props 가 onVideoSelect를 가지고 있다. 
const VideoList = (props) => {
    const videoItems = props.videos.map(((video)=>{
        return <VideoListItem 
                    video = {video} 
                    key = {video.etag}
                    onVideoSelect = {props.onVideoSelect}
                    />
    }))
    return (
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;