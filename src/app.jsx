import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import Navbar from './components/video_search/navbar';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const search = query => {
		youtube
			.search(query) //
			.then(videos => setVideos(videos));
	};

	useEffect(() => {
		youtube
			.mostPopular() //
			.then(videos => setVideos(videos));
	}, []);
	return (
		<div className={styles.app}>
			<Navbar onSearch={search} />
			<VideoList videos={videos} />
		</div>
	);
}

export default App;
