import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import Navbar from './components/video_search/navbar';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const selectVideo = video => {
		setSelectedVideo(video);
	};

	const search = query => {
		youtube
			.search(query) //
			.then(videos => {
				setVideos(videos);
				setSelectedVideo(null);
			});
	};

	useEffect(() => {
		youtube
			.mostPopular() //
			.then(videos => setVideos(videos));
	}, []);
	return (
		<div className={styles.app}>
			<Navbar onSearch={search} />
			<section className={styles.content}>
				{selectedVideo && (
					<div className={styles.detail}>
						<VideoDetail video={selectedVideo} />
					</div>
				)}
				<div className={styles.list}>
					<VideoList
						videos={videos}
						onVideoClick={selectVideo}
						display={selectedVideo ? 'list' : 'grid'}
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
