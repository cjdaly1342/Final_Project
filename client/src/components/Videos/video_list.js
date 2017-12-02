import React from 'react';
import VideoListItem from './video_listItem'

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem key={video.etag} video={video} 
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;