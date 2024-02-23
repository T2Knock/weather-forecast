import { BallTriangle } from 'react-loader-spinner';
import '@/styles/globals.css';
import { COLOR } from '@/constants';
import { useTheme } from '@/hooks/useTheme';

const Spinner = () => {
	const { theme } = useTheme();

	return (
		<BallTriangle
			ariaLabel="loading-spinner"
			color={COLOR[theme].primary}
		/>
	);
};

export default Spinner;
