import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => {
	return (
		<section className={styles.detail}>
			<iframe
				title='video'
				type='text/html'
				width='720'
				height='405'
				src={`https://www.youtube.com/embed/${video.id}`}
				frameBorder='0'
				allowFullScreen></iframe>
			<h2>{snippet.title}</h2>
			<h2>{snippet.channelTitle}</h2>
			<pre className={styles.description}>{snippet.description}</pre>
		</section>
	);
};
export default VideoDetail;
