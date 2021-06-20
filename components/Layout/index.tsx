import { ReactNode } from "react";
import Link from 'next/link';
import Image from 'next/image';

import brFlag from '../../public/brazil-flag.png';
import usaFlag from '../../public/usa-flag.jpg';

import styles from './index.module.scss';
import { useRouter } from "next/dist/client/router";

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
	const { route } = useRouter();

	return (
		<div className={styles.wrapper}>
			{children}

			<div className={styles.i18n}>
				<Link href={route} locale="pt">
					<a>
						<Image src={brFlag} alt="Brasil" />
					</a>
				</Link>
				<Link href={route} locale="en">
					<a>
						<Image src={usaFlag} alt="United States" />
					</a>
				</Link>
			</div>
		</div>
	)
}
