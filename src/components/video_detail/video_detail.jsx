import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => (
	<section className={styles.detail}>
		<iframe
			title={video.id}
			type='text/html'
			width='720'
			height='405'
			src={`https://www.youtube.com/embed/${video.id}`}
			frameborder='0'
			allowfullscreen></iframe>
		<h2>{snippet.title}</h2>
		<h2>{snippet.channelTitle}</h2>
		<pre className={styles.description}>{snippet.description}</pre>
	</section>
);
export default VideoDetail;
