import { SmartTextarea } from '../components/SmartTextarea';
import styles from './smart-textarea.module.scss';

export default function SmartTextareaPage() {
	return (
		<div className={styles.container}>
			<SmartTextarea />
		</div>
	)
}
