import { useWeather } from '@/api/useWeather';
import Toggle from '@/components/Toggle';
import { TABLET_MOBILE_SIZE } from '@/constants';
import styles from '@/styles/Location.module.css';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Location = ({
	isToggled,
	toggleChange,
}: {
	isToggled: boolean;
	toggleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
	const { weather, isLoading } = useWeather();
	const isTabletOrMobile = useMediaQuery({
		query: `(max-width: ${TABLET_MOBILE_SIZE}px)`,
	});

	if (isLoading) return <div>Loading...</div>;

	const name = weather.name;
	const country = weather.sys.country;

	return (
		<div className={styles.container}>
			<div className={styles.location}>
				<FontAwesomeIcon className={styles.icon} icon={faMapPin} />
				<span className={styles.text}>{`${name}, ${country}`}</span>
			</div>
			{isTabletOrMobile && (
				<Toggle toggled={isToggled} onChange={toggleChange} />
			)}
		</div>
	);
};
