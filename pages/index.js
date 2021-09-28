import { Component } from 'react';

import EventsList from '../components/common/events-list/events-list';
import { fetchFeaturedEvents } from '../helpers/api-util';

class HomePage extends Component {
	render() {
		return (
			<div>
				<EventsList items={this.props.events} />
			</div>
		);
	}
}

export const getStaticProps = async () => {
	const events = await fetchFeaturedEvents();
	return {
		props: { events },
		revalidate: 60,
	};
};

export default HomePage;
