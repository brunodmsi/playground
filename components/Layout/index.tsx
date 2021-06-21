import { ReactNode } from "react";
	// fill: var(--white);
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

import brFlag from '../../public/brazil-flag.png';
import usaFlag from '../../public/usa-flag.jpg';

import styles from './index.module.scss';
import { useRouter } from "next/dist/client/router";
import { useTranslations } from "next-intl";

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
	const t = useTranslations();
	const { route, push: routerPush } = useRouter();

	const isHomepage = route === '/';

	function redirectTo(route: string) {
		routerPush(route);
	}

	return (
		<div className={styles.wrapper}>
			{children}

			{!isHomepage ? (
				<button onClick={() => redirectTo('/')} type="button" className={styles.goBackButton}>
					<FaLongArrowAltLeft size={25} />
					{t('goBack')}
				</button>
			) : null}

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
