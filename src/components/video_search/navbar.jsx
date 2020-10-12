import React from 'react';
import { useRef } from 'react';
import styles from './navbar.module.css';

const Navbar = ({ onSearch }) => {
	const inputRef = useRef(); //hook
	const handleSearch = () => {
		const value = inputRef.current.value;
		//검색은 prop으로 받아와야한다
		onSearch(value);
		inputRef.current.value = '';
	};

	const onClick = () => {
		handleSearch();
	};

	const onKeyPress = event => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.img} src='/images/logo.png' alt='logo' />
				<h1>Youtube</h1>
			</div>
			<input
				ref={inputRef}
				type='search'
				placeholder='search...'
				className={styles.input}
				onKeyPress={onKeyPress}
			/>
			<button type='submit' className={styles.button} onClick={onClick}>
				<img
					className={styles.buttonImg}
					src='/images/search.png'
					alt='search'
				/>
			</button>
		</header>
	);
};

export default Navbar;
