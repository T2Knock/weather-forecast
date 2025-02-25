import styles from '@/styles/Toggle.module.css';
import { ChangeEvent } from 'react';

const Toggle = ({
	label,
	toggled,
	onChange,
}: {
	label?: string;
	toggled: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<label className={styles.container}>
			<input
				className={styles.input}
				type="checkbox"
				defaultChecked={toggled}
				onChange={onChange}
			/>
			<span className={styles.span} />
			<strong className={styles.label}>{label}</strong>
		</label>
	);
};

export default Toggle;
