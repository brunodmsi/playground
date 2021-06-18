import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './index.module.scss';

export default function Home() {
	const t = useTranslations('Playground');

  return (
    <div className={styles.container}>
			<h1>brunodemasi.dev <span className={styles.underline}>playground</span></h1>
			<p>{t('header')}</p>

			<div className={styles.projects}>
				<Link href="/smart-textarea" passHref>
					<div className={styles.project}>
						<h4>{t('smartTextarea.title')}</h4>
						<span>{t('smartTextarea.description')}</span>
					</div>
				</Link>
				<Link href="/progress-bar" passHref>
					<div className={styles.project}>
						<h4>{t('progressBar.title')}</h4>
						<span>{t('progressBar.description')}</span>
					</div>
				</Link>
				<Link href="/multistep-form" passHref>
					<div className={styles.project}>
						<h4>{t('multiStepForm.title')}</h4>
						<span>{t('multiStepForm.description')}</span>
					</div>
				</Link>
			</div>
    </div>
  )
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: {
				...require(`../messages/playground/${locale}.json`)
			}
		}
	}
}
