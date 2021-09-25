import Link from 'next/link';
import styles from './link-button.module.css';

const LinkButton = (props) => {
	return (
		<Link href={props.link}>
			<a className={styles.btn}>{props.children}</a>
		</Link>
	);
};

export default LinkButton;
