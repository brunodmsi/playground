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
						<h4>Textarea inteligente</h4>
						<span>
							Textarea que nem o do twitter: quantos caracteres escreveu
							a representação de porcentagem em relação ao limite,
							avisos sobre estar perto do limite ou se passou dele, enfim...
						</span>
					</div>
				</Link>
				<Link href="/progress-bar" passHref>
					<div className={styles.project}>
						<h4>Barra de Progresso</h4>
						<span>
							Em alguns sites (principalmente de leitura), você consegue
							observar que existe um componente que vai se preenchendo
							de acordo com que você abaixa a tela. Este componente busca repetir
							o mesmo comportamento.
						</span>
					</div>
				</Link>
				<Link href="/multistep-form" passHref>
					<div className={styles.project}>
						<h4>Formulário com múltiplas etapas</h4>
						<span>
							Simulação de página de cadastro
							com múltiplas etapas como: informações pessoais,
							endereço e outros dados
						</span>
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
