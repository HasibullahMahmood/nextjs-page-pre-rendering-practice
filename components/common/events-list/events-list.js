import { Component } from 'react';
import EventItem from '../event-item/event-item';

class EventsList extends Component {
	render() {
		const { items } = this.props;
		return (
			<ul>
				{items.map((item) => (
					<EventItem key={item.id} />
				))}
			</ul>
		);
	}
}

export default EventsList;
