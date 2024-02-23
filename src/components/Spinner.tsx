import { BallTriangle } from 'react-loader-spinner';
import '@/styles/globals.css';
import { COLOR } from '@/constants';

const Spinner = () => {
	return <BallTriangle ariaLabel="loading-spinner" color={COLOR.PRIMARY} />;
};

export default Spinner;
