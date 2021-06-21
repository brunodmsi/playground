import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { createRef, useState } from 'react';

import { ProgressBar, CircleProgressBar } from '../components/ProgressBar';
import { ReadingProgress } from '../components/ReadingProgress';
import styles from './progress-bar.module.scss';

export default function ProgressBarPage() {
	const t = useTranslations();
	const target = createRef<HTMLDivElement>();
	const [sliderValue, setSliderValue] = useState(50);

	return (
		<div ref={target} className={styles.container}>
			<ReadingProgress target={target} />
			<h4>{t('Playground.progressBar.title')}</h4>
			<span>{t('Playground.progressBar.description')}</span>
			<br /><br />
			<p>{t('Playground.progressBar.introduction')}</p>

			<label htmlFor="slider">{sliderValue}%</label>
			<input
				id="slider"
				type="range"
				defaultValue={sliderValue}
				onChange={e => setSliderValue(Number(e.currentTarget.value))}
			/>

			<br /><br />
			<h4>{t('Playground.progressBar.circle')}</h4>
			<CircleProgressBar value={sliderValue} size={150} />
			<br /><br />
			<h4>{t('Playground.progressBar.line')}</h4>
			<ProgressBar value={sliderValue} />

			<br /><br />

			<div className={styles.post}>
				<h1>Lorem Ipsum</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nunc ipsum. Fusce blandit ante sit amet tortor cursus lacinia. Etiam vel nisl iaculis, tempus diam at, porttitor justo. Donec eget hendrerit ipsum. Donec sed molestie felis. Pellentesque nec velit sit amet arcu hendrerit aliquet. Aliquam urna sapien, efficitur non tellus nec, euismod rutrum metus. Nam condimentum condimentum convallis. Vivamus porta sem et erat tincidunt, eget aliquet ligula malesuada. Aliquam efficitur dapibus libero, et vulputate dolor eleifend vel. Aliquam elementum maximus mi, non aliquet orci consectetur a. Sed faucibus nisl mauris, at posuere enim fermentum quis. Integer quis lobortis felis. Nam maximus, arcu eu laoreet hendrerit, odio arcu aliquet odio, non varius lorem ante in lectus. Nunc consectetur ornare condimentum.</p>
				<p>Mauris tristique commodo ipsum ac porta. Quisque tristique placerat leo, sed sollicitudin dui consequat ac. Mauris nec erat non mauris convallis molestie pharetra in nulla. Vivamus lacinia dui urna, vitae gravida purus malesuada efficitur. Vivamus tempus lorem quam, et lacinia orci euismod id. Duis convallis justo at nisi tincidunt, non elementum turpis malesuada. Aliquam massa elit, euismod et neque sed, tristique ultrices est. Mauris felis nisl, gravida ut lorem ut, interdum mollis nunc. Quisque rhoncus rutrum nisi, ut viverra justo. Cras tempus pulvinar felis, nec dignissim neque tempus vitae. Fusce at ornare mauris. Duis venenatis ante in urna sagittis, nec scelerisque metus semper. Cras lorem nibh, porta at mattis nec, blandit eget risus. Integer in sodales odio. Sed sed erat posuere, finibus felis vel, molestie risus.</p>
				<br />
				<h3>Donec</h3>
				<p>Donec ac libero in dui volutpat ornare eu vitae nunc. Curabitur sed elit mattis, maximus tortor id, suscipit quam. Nullam gravida non lorem id imperdiet. Nulla sed justo in ante commodo imperdiet quis ut odio. Aenean non leo ac ante finibus convallis eu vel lacus. Donec quis massa consectetur, elementum nisl eu, condimentum libero. Vestibulum volutpat eget diam blandit interdum. Praesent eget vulputate nisl, eu blandit ex.</p>
				<p>Maecenas dictum tortor in orci porttitor, nec consectetur sem posuere. Nulla lacinia felis risus, eget sollicitudin mauris eleifend nec. Maecenas sit amet odio ac justo sollicitudin elementum sodales eu arcu. Nam ac tempor eros. Mauris blandit vitae nulla ac vehicula. Donec leo tortor, vulputate interdum tempus bibendum, tristique aliquet turpis. Curabitur nulla metus, dignissim ut rutrum eu, venenatis sit amet purus. Maecenas vel metus facilisis, rhoncus eros sed, lacinia justo. Curabitur id tincidunt felis, in laoreet est. Nam iaculis quam diam, in mollis erat varius eget.</p>
				<br />
				<h3>Nam</h3>
				<p>Nam a tincidunt lacus. Nunc id erat ipsum. Proin vitae malesuada dolor, sit amet fermentum lorem. Nulla facilisi. Nullam sed ornare nisi, a interdum tellus. Proin ac consequat est. Donec viverra iaculis ligula, id euismod lectus ullamcorper lobortis. Nam vestibulum ipsum ac lorem iaculis vestibulum. Cras justo mi, aliquet a tempus a, vulputate vitae lacus. Integer ut molestie enim, bibendum tempus risus. Vestibulum odio ligula, ultrices ac augue in, ultricies semper lacus.</p>
				<br />
				<h1>Lorem Ipsum</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nunc ipsum. Fusce blandit ante sit amet tortor cursus lacinia. Etiam vel nisl iaculis, tempus diam at, porttitor justo. Donec eget hendrerit ipsum. Donec sed molestie felis. Pellentesque nec velit sit amet arcu hendrerit aliquet. Aliquam urna sapien, efficitur non tellus nec, euismod rutrum metus. Nam condimentum condimentum convallis. Vivamus porta sem et erat tincidunt, eget aliquet ligula malesuada. Aliquam efficitur dapibus libero, et vulputate dolor eleifend vel. Aliquam elementum maximus mi, non aliquet orci consectetur a. Sed faucibus nisl mauris, at posuere enim fermentum quis. Integer quis lobortis felis. Nam maximus, arcu eu laoreet hendrerit, odio arcu aliquet odio, non varius lorem ante in lectus. Nunc consectetur ornare condimentum.</p>
				<p>Mauris tristique commodo ipsum ac porta. Quisque tristique placerat leo, sed sollicitudin dui consequat ac. Mauris nec erat non mauris convallis molestie pharetra in nulla. Vivamus lacinia dui urna, vitae gravida purus malesuada efficitur. Vivamus tempus lorem quam, et lacinia orci euismod id. Duis convallis justo at nisi tincidunt, non elementum turpis malesuada. Aliquam massa elit, euismod et neque sed, tristique ultrices est. Mauris felis nisl, gravida ut lorem ut, interdum mollis nunc. Quisque rhoncus rutrum nisi, ut viverra justo. Cras tempus pulvinar felis, nec dignissim neque tempus vitae. Fusce at ornare mauris. Duis venenatis ante in urna sagittis, nec scelerisque metus semper. Cras lorem nibh, porta at mattis nec, blandit eget risus. Integer in sodales odio. Sed sed erat posuere, finibus felis vel, molestie risus.</p>
				<br />
				<h3>Donec</h3>
				<p>Donec ac libero in dui volutpat ornare eu vitae nunc. Curabitur sed elit mattis, maximus tortor id, suscipit quam. Nullam gravida non lorem id imperdiet. Nulla sed justo in ante commodo imperdiet quis ut odio. Aenean non leo ac ante finibus convallis eu vel lacus. Donec quis massa consectetur, elementum nisl eu, condimentum libero. Vestibulum volutpat eget diam blandit interdum. Praesent eget vulputate nisl, eu blandit ex.</p>
				<p>Maecenas dictum tortor in orci porttitor, nec consectetur sem posuere. Nulla lacinia felis risus, eget sollicitudin mauris eleifend nec. Maecenas sit amet odio ac justo sollicitudin elementum sodales eu arcu. Nam ac tempor eros. Mauris blandit vitae nulla ac vehicula. Donec leo tortor, vulputate interdum tempus bibendum, tristique aliquet turpis. Curabitur nulla metus, dignissim ut rutrum eu, venenatis sit amet purus. Maecenas vel metus facilisis, rhoncus eros sed, lacinia justo. Curabitur id tincidunt felis, in laoreet est. Nam iaculis quam diam, in mollis erat varius eget.</p>
				<br />
				<h3>Nam</h3>
				<p>Nam a tincidunt lacus. Nunc id erat ipsum. Proin vitae malesuada dolor, sit amet fermentum lorem. Nulla facilisi. Nullam sed ornare nisi, a interdum tellus. Proin ac consequat est. Donec viverra iaculis ligula, id euismod lectus ullamcorper lobortis. Nam vestibulum ipsum ac lorem iaculis vestibulum. Cras justo mi, aliquet a tempus a, vulputate vitae lacus. Integer ut molestie enim, bibendum tempus risus. Vestibulum odio ligula, ultrices ac augue in, ultricies semper lacus.</p>
				<br />
				<h1>Lorem Ipsum</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nunc ipsum. Fusce blandit ante sit amet tortor cursus lacinia. Etiam vel nisl iaculis, tempus diam at, porttitor justo. Donec eget hendrerit ipsum. Donec sed molestie felis. Pellentesque nec velit sit amet arcu hendrerit aliquet. Aliquam urna sapien, efficitur non tellus nec, euismod rutrum metus. Nam condimentum condimentum convallis. Vivamus porta sem et erat tincidunt, eget aliquet ligula malesuada. Aliquam efficitur dapibus libero, et vulputate dolor eleifend vel. Aliquam elementum maximus mi, non aliquet orci consectetur a. Sed faucibus nisl mauris, at posuere enim fermentum quis. Integer quis lobortis felis. Nam maximus, arcu eu laoreet hendrerit, odio arcu aliquet odio, non varius lorem ante in lectus. Nunc consectetur ornare condimentum.</p>
				<p>Mauris tristique commodo ipsum ac porta. Quisque tristique placerat leo, sed sollicitudin dui consequat ac. Mauris nec erat non mauris convallis molestie pharetra in nulla. Vivamus lacinia dui urna, vitae gravida purus malesuada efficitur. Vivamus tempus lorem quam, et lacinia orci euismod id. Duis convallis justo at nisi tincidunt, non elementum turpis malesuada. Aliquam massa elit, euismod et neque sed, tristique ultrices est. Mauris felis nisl, gravida ut lorem ut, interdum mollis nunc. Quisque rhoncus rutrum nisi, ut viverra justo. Cras tempus pulvinar felis, nec dignissim neque tempus vitae. Fusce at ornare mauris. Duis venenatis ante in urna sagittis, nec scelerisque metus semper. Cras lorem nibh, porta at mattis nec, blandit eget risus. Integer in sodales odio. Sed sed erat posuere, finibus felis vel, molestie risus.</p>
				<br />
				<h3>Donec</h3>
				<p>Donec ac libero in dui volutpat ornare eu vitae nunc. Curabitur sed elit mattis, maximus tortor id, suscipit quam. Nullam gravida non lorem id imperdiet. Nulla sed justo in ante commodo imperdiet quis ut odio. Aenean non leo ac ante finibus convallis eu vel lacus. Donec quis massa consectetur, elementum nisl eu, condimentum libero. Vestibulum volutpat eget diam blandit interdum. Praesent eget vulputate nisl, eu blandit ex.</p>
				<p>Maecenas dictum tortor in orci porttitor, nec consectetur sem posuere. Nulla lacinia felis risus, eget sollicitudin mauris eleifend nec. Maecenas sit amet odio ac justo sollicitudin elementum sodales eu arcu. Nam ac tempor eros. Mauris blandit vitae nulla ac vehicula. Donec leo tortor, vulputate interdum tempus bibendum, tristique aliquet turpis. Curabitur nulla metus, dignissim ut rutrum eu, venenatis sit amet purus. Maecenas vel metus facilisis, rhoncus eros sed, lacinia justo. Curabitur id tincidunt felis, in laoreet est. Nam iaculis quam diam, in mollis erat varius eget.</p>
				<br />
				<h3>Nam</h3>
				<p>Nam a tincidunt lacus. Nunc id erat ipsum. Proin vitae malesuada dolor, sit amet fermentum lorem. Nulla facilisi. Nullam sed ornare nisi, a interdum tellus. Proin ac consequat est. Donec viverra iaculis ligula, id euismod lectus ullamcorper lobortis. Nam vestibulum ipsum ac lorem iaculis vestibulum. Cras justo mi, aliquet a tempus a, vulputate vitae lacus. Integer ut molestie enim, bibendum tempus risus. Vestibulum odio ligula, ultrices ac augue in, ultricies semper lacus.</p>
			</div>
		</div>
	)
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: {
				...require(`../messages/playground/${locale}.json`),
				...require(`../messages/general/${locale}.json`),
			}
		}
	}
}
