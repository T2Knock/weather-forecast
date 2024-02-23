import { BallTriangle } from 'react-loader-spinner';
import '@/styles/globals.css';
import { COLOR } from '@/constants';

const Spinner = () => {
	const theme = 'light';
	return (
		<BallTriangle
			ariaLabel="loading-spinner"
			color={COLOR[theme].primary}
		/>
	);
};

export default Spinner;
