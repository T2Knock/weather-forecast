'use client';

import { useForecast } from '@/api/useForecast';
import { useWeather } from '@/api/useWeather';
import { Location } from '@/components/Location';
import Spinner from '@/components/Spinner';
import WeatherInfo from '@/components/WeatherInfo';
import useDebouncedResize from '@/hooks/useDebounceResize';
import styles from '@/styles/page.module.css';
import { ChangeEvent, useEffect, useState } from 'react';

export default function Page() {
	const [isFlipped, setIsFlipped] = useState(false);
	const windowWidth = useDebouncedResize(200).width;
	const [isLoading, setIsLoading] = useState(true);

	const { isLoading: weatherLoading } = useWeather();
	const { isLoading: forecastLoading } = useForecast();

	useEffect(() => {
		setTimeout(() => {
			if (weatherLoading || forecastLoading) setIsLoading(false);
		}, 1000);
	}, [weatherLoading, forecastLoading]);

	if (isLoading) return <Spinner />;

	return (
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
	);
}
