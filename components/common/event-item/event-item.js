import { Component } from 'react';
import Link from 'next/link';

import styles from './event-item.module.css';

class EventItem extends Component {
	render() {
		const { id, title, image, date, location } = this.props;
		const humanReadableDate = new Date(date).toLocaleDateString('US-en', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		});

		const address = location.replace(', ', '\n');
		return (
			<li className={styles.item}>
				<img src={image} alt="" />
				<div className={styles.content}>
					<div>
						<h2>{title}</h2>
						<div className={styles.date}>
							<time>{humanReadableDate}</time>
						</div>
						<div className={styles.address}>
							<address>{address}</address>
						</div>
					</div>
					<div className={styles.actions}>
						<Link href={`/events/${id}`}>Explore Link</Link>
					</div>
				</div>
			</li>
		);
	}
}

export default EventItem;
