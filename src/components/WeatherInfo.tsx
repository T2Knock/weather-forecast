import Forecast from '@/components/Forecast';
import Weather from '@/components/Weather';
import { TABLET_MOBILE_SIZE } from '@/constants';
import styles from '@/styles/WeatherInfo.module.css';
import ReactCardFlip from 'react-card-flip';
import { useMediaQuery } from 'react-responsive';

const WeatherInfo = ({ isFlipped }: { isFlipped: boolean }) => {
	const isTabletOrMobileWidth = useMediaQuery({
		query: `(max-width: ${TABLET_MOBILE_SIZE.WIDTH}px)`,
	});
	const isTabletOrMobileHeight = useMediaQuery({
		query: `(max-height: ${TABLET_MOBILE_SIZE.HEIGHT}px)`,
	});

	return (
		<>
			{isTabletOrMobileWidth || isTabletOrMobileHeight ? (
				<ReactCardFlip isFlipped={isFlipped}>
					<Weather />
					<Forecast />
				</ReactCardFlip>
			) : (
				<div className={styles.container}>
					<Weather />
					<Forecast />
				</div>
			)}
		</>
	);
};

export default WeatherInfo;
