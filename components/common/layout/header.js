import { Component } from 'react';
import Link from 'next/link';

import styles from './header.module.css';

class Header extends Component {
	render() {
		return (
			<header className={styles.header}>
				<div className={styles.logo}>
					<Link href="/">NextEvents</Link>
				</div>
				<nav className={styles.navigation}>
					<ul>
						<li>
							<Link href="/events">Browse All Events</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
