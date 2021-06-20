import { useMemo, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './index.module.scss';

const MAX_INPUT_SIZE = 120;
const WARNING_ZONE_TRESHOLD = 10;

type Post = {
	text: string;
	createdAt: Date,
}

interface SmartTextareaProps {
	onSubmit: (post: Post) => void;
}

export function SmartTextarea({ onSubmit }: SmartTextareaProps) {
	const [text, setText] = useState('');

	const isDisabled = useMemo(() => text.length > MAX_INPUT_SIZE, [text]);
	const isWarningZone = useMemo(() =>
		MAX_INPUT_SIZE - WARNING_ZONE_TRESHOLD <= text.length &&
		text.length <= MAX_INPUT_SIZE,
		[text]
	);

	function handleSubmit() {
		const data = {
			text,
			createdAt: new Date()
		}

		onSubmit(data);

		setText('');
	}

	return (
		<div className={styles.container}>
			<textarea
				value={text}
				onChange={e => setText(e.target.value)}
				placeholder="Escreva o que está acontecendo..."
			>
			</textarea>

			<div className={styles.footer}>
				{/* <span>{text.length > MAX_INPUT_SIZE ? MAX_INPUT_SIZE : text.length}/{MAX_INPUT_SIZE}</span> */}

				<div className={styles.progressBar}>
					<CircularProgressbar
						value={text.length * 100 / MAX_INPUT_SIZE}
						text={
								isWarningZone || isDisabled
								? (MAX_INPUT_SIZE - text.length).toString()
								: ''
						}
						styles={buildStyles({
							textSize: '35px',
							textColor: isWarningZone
								? 'var(--yellow-500)'
								: 'var(--red)',

							pathColor: isWarningZone
								? 'var(--yellow-500)'
								: isDisabled
									? 'var(--red)'
									: 'var(--cyan-500)'
						})}
					/>
				</div>

				<button
					className={styles.postButton}
					disabled={isDisabled}
					onClick={handleSubmit}
				>
					Postar
				</button>
			</div>
		</div>
	)
}
