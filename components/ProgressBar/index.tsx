import { RefObject, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

interface ProgressProps {
	value: number;
}

interface CircleProgressBarProps extends ProgressProps {
	size?: number;
	strokeWidth?: number;
	circleOneStroke?: string;
	circleTwoStroke?: string;
	textColor?: string;
}

export function CircleProgressBar({
	value,
	size = 500,
	strokeWidth = 15,
	circleOneStroke = '#d9edfe',
	circleTwoStroke = 'var(--cyan-500)',
	textColor = 'var(--cyan-500)'
}: CircleProgressBarProps) {
	const [offset, setOffset] = useState(0);
	const circleRef = useRef<SVGCircleElement>(null);

	const center = size / 2;
	const radius = size / 2 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;

	useEffect(() => {
		const progressOffset = ((100 - value) / 100) * circumference;
		setOffset(progressOffset)

		if (circleRef.current) {
			circleRef.current.setAttribute(
				'style',
				'transition: stroke-dashoffset 850ms ease-in-out'
			);
		}
	}, [setOffset, value, circumference, offset])

	return (
		<svg
			className={styles.circle}
			width={size}
			height={size}
		>
			<circle
				className={styles.circleBg}
				stroke={circleOneStroke}
				cx={center}
				cy={center}
				r={radius}
				strokeWidth={strokeWidth}
			/>
			<circle
				className={styles.circleSvg}
				ref={circleRef}
				stroke={circleTwoStroke}
				cx={center}
				cy={center}
				r={radius}
				strokeWidth={strokeWidth}
				strokeDasharray={circumference}
				strokeDashoffset={offset}
			/>
			<text
				x={`${center}`}
				y={`${center}`}
				className={styles.circleText}
				fill={textColor}
			>
				{value}%
			</text>
		</svg>
	)
}

interface ProgressBarProps extends ProgressProps {
	bgColor?: string;
}

export function ProgressBar({ value, bgColor = 'var(--cyan-500)'}: ProgressBarProps) {
	return (
		<div className={styles.lineContainer}>
			<div
				className={styles.lineFiller}
				style={{ width: `${value}%`, backgroundColor: bgColor }}
			>
				<span className={styles.lineLabel}>{value}%</span>
			</div>
		</div>
	)
}
