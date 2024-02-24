'use client';
import { useForecast } from '@/api/useForecast';
import { useWeather } from '@/api/useWeather';
import { Location } from '@/components/Location';
import Spinner from '@/components/Spinner';
import WeatherInfo from '@/components/WeatherInfo';
import useDebouncedResize from '@/hooks/useDebounceResize';
import { useTheme } from '@/hooks/useTheme';
import styles from '@/styles/page.module.css';
import { ChangeEvent, useEffect, useState } from 'react';

export default function Page() {
	const { theme } = useTheme();

	const [isFlipped, setIsFlipped] = useState(false);
	const windowWidth = useDebouncedResize(200).width;

	const { isLoading: weatherLoading } = useWeather();
	const { isLoading: forecastLoading } = useForecast();

	useEffect(() => {
		document.body.style.backgroundColor =
			theme === 'light' ? 'white' : '#414868';
	}, [theme]);

	if (weatherLoading || forecastLoading) return <Spinner />;

	return (
		<div className={theme}>
			<div className={styles['card-container']}>
				<Location
					isToggled={isFlipped}
					toggleChange={(event: ChangeEvent<HTMLInputElement>) =>
						setIsFlipped(event.target.checked)
					}
					windowWidth={windowWidth}
				/>
				<WeatherInfo isFlipped={isFlipped} windowWidth={windowWidth} />
			</div>
		</div>
	);
}
