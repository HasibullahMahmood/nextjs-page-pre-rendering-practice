import { Component } from 'react';
import EventItem from '../event-item/event-item';

import styles from './events-list.module.css';

class EventsList extends Component {
	render() {
		const { items } = this.props;
		return (
			<ul className={styles.list}>
				{items.map((item) => (
					<EventItem
						key={item.id}
						id={item.id}
						title={item.title}
						image={item.image}
						date={item.date}
						location={item.location}
					/>
				))}
			</ul>
		);
	}
}

export default EventsList;
