import { useEffect, useState } from 'react';

export default function useDebouncedResize(delay: number) {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});

		const handleResize = () => {
			setTimeout(() => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}, delay);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [delay]);

	return windowSize;
}
