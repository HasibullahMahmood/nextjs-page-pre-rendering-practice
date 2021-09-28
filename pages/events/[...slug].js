import { Component } from 'react';
import { withRouter } from 'next/router';

import ResultsTitle from '../../components/common/result-title/results-title';
import EventsList from '../../components/common/events-list/events-list';
import ErrorAlert from '../../components/common/error-alert/error-alert';
import Button from '../../components/common/button/button';
import { fetchFilteredEvents } from '../../helpers/api-util';

class FilteredEventsPage extends Component {
	render() {
		if (this.props.hasError) {
			return (
				<>
					<ErrorAlert>
						<p>Please enter valid url!</p>
					</ErrorAlert>
					<div className="center" style={{ width: '170px' }}>
						<Button link="/events">Show All Events</Button>
					</div>
				</>
			);
		}

		const filteredEvents = this.props.events;
		if (filteredEvents.length === 0) {
			return (
				<>
					<ErrorAlert>
						<p>Found no event!</p>
					</ErrorAlert>
					<div className="center" style={{ width: '170px' }}>
						<Button link="/events">Show All Events</Button>
					</div>
				</>
			);
		}
		return (
			<>
				<ResultsTitle date={new Date(year, month - 1)} />
				<EventsList items={filteredEvents} />
			</>
		);
	}
}

export async function getServerSideProps(context) {
	const { slug } = context.params;
	if (!slug || slug.length < 2) {
		return { props: { hasError: true } };
	}

	const year = +slug[0];
	const month = +slug[1];

	if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
		return { props: { hasError: true } };
	}
	const events = await fetchFilteredEvents({ year, month });
	return {
		props: { events },
	};
}

export default withRouter(FilteredEventsPage);
