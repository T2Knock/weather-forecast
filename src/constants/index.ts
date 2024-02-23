import {
	IconDefinition,
	faCloud,
	faCloudMoon,
	faCloudRain,
	faCloudShowersHeavy,
	faCloudShowersWater,
	faCloudSun,
	faDroplet,
	faMoon,
	faSnowflake,
	faSun,
	faThunderstorm,
} from '@fortawesome/free-solid-svg-icons';

export const WEATHER_ICON: Record<string, IconDefinition> = {
	'01d': faSun,
	'01n': faMoon,

	'02d': faCloudSun,
	'02n': faCloudMoon,

	'03d': faCloud,
	'03n': faCloud,

	'04d': faCloudRain,
	'04n': faCloudRain,

	'09d': faCloudShowersHeavy,
	'09n': faCloudShowersHeavy,

	'10d': faCloudShowersWater,
	'10n': faCloudShowersWater,

	'11d': faThunderstorm,
	'11n': faThunderstorm,

	'13d': faSnowflake,
	'13n': faSnowflake,

	'50d': faDroplet,
	'50n': faDroplet,
};

export const DEFAULT_CITY_NAME = 'Hanoi';
export const BREAK_WIDTH = 800;

export const COLOR = {
	light: {
		primary: '#83c5be',
		secondary: '#006d77',
		neutral: '#edf6f',
	},
	dark: {
		primary: '#2ac3de',
		secondary: '#b4f9f8',
		neutral: '#414868',
	},
};
