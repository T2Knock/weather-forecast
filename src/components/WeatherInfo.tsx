import Forecast from '@/components/Forecast';
import Weather from '@/components/Weather';
import { TABLET_MOBILE_SIZE } from '@/constants';
import styles from '@/styles/WeatherInfo.module.css';
import ReactCardFlip from 'react-card-flip';
import { useMediaQuery } from 'react-responsive';

const WeatherInfo = ({ isFlipped }: { isFlipped: boolean }) => {
	const isTabletOrMobile = useMediaQuery({
		query: `(max-width: ${TABLET_MOBILE_SIZE}px)`,
	});

	return (
		<>
			{isTabletOrMobile ? (
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
