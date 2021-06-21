import { RefObject } from 'react';
import styles from './index.module.scss';

interface ProgressBarProps {
	value: number;
	type?: 'bar' | 'circle';
}

export function ProgressBar({ value, type = 'bar' }: ProgressBarProps) {
	if (type === 'circle') {
		return (
			<div>
				<svg height="100" width="100">
					<circle cx="50" cy="50" r="40" stroke="#428bca" strokeWidth="6" fill="transparent" />
				</svg>
			</div>
		)
	}

	return (
		<div className={styles.container}>
		</div>
	)
}
