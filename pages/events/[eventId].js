import { Component } from 'react';
import { withRouter } from 'next/router';

import { fetchEventById, fetchFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/pages-components/event-detail/event-summary';
import EventLogistics from '../../components/pages-components/event-detail/event-logistics';
import EventContent from '../../components/pages-components/event-detail/event-content';

class EventDetailPage extends Component {
	render() {
		const event = this.props.event;

		if (!event) {
			return <p>Found No Event!</p>;
		}
		return (
			<>
				<EventSummary title={event.title} />
				<EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
				<EventContent>
					<p>{event.description}</p>
				</EventContent>
			</>
		);
	}
}

export const getStaticProps = async (context) => {
	const eventId = context.params.eventId;
	const event = await fetchEventById(eventId);
	return {
		props: {
			event,
		},
		revalidate: 30,
	};
};
export const getStaticPaths = async () => {
	const events = await fetchFeaturedEvents();
	const paths = events.map((item) => ({ params: { eventId: item.id } }));
	return {
		paths: paths,
		fallback: 'blocking',
	};
};

export default withRouter(EventDetailPage);
