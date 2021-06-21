import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { SmartTextarea } from '../components/SmartTextarea';
import styles from './smart-textarea.module.scss';

type Post = {
	text: string;
	createdAt: Date;
}

export default function SmartTextareaPage() {
	const t = useTranslations();
	const [posts, setPosts] = useState<Post[]>([]);

	return (
		<div className={styles.container}>
			<h4>{t('Playground.smartTextarea.title')}</h4>
			<span>{t('Playground.smartTextarea.description')}</span>

			<br />
			<br />

			<SmartTextarea onSubmit={(post) => setPosts([post, ...posts])} />

			<div className={styles.posts}>
				{posts.map((post, index) => {
					return (
						<div key={index}>
							<p>{post.text}</p>
							<span>{new Intl.DateTimeFormat('pt-BR').format(post.createdAt)}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: {
				...require(`../messages/playground/${locale}.json`),
				...require(`../messages/general/${locale}.json`)
			}
		}
	}
}
