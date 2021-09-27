import { Component } from 'react';

import styles from './event-item.module.css';
import Button from '../button/button';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';

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
				<img src={`/${image}`} alt="" />
				<div className={styles.content}>
					<div>
						<h2>{title}</h2>
						<div className={styles.date}>
							<DateIcon />
							<time>{humanReadableDate}</time>
						</div>
						<div className={styles.address}>
							<AddressIcon />
							<address>{address}</address>
						</div>
					</div>
					<div className={styles.actions}>
						<Button link={`/events/${id}`}>
							Explore Event
							<span className={styles.icon}>
								<ArrowRightIcon />
							</span>
						</Button>
					</div>
				</div>
			</li>
		);
	}
}

export default EventItem;
