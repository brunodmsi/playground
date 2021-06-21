import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl';

import { Layout } from '../components/Layout';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
	console.log(pageProps.messages)
  return (
		<NextIntlProvider
			messages={pageProps.messages}
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</NextIntlProvider>
	)
}
export default MyApp
