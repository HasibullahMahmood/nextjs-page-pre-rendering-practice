import { Component } from 'react';
import Link from 'next/link';

class EventItem extends Component {
	render() {
		const { id, title, image, date, location } = this.props;
		return (
			<li>
				<img src={image} alt="" />
				<div>
					<div>
						<h2>{title}</h2>
						<div>
							<time>{date}</time>
						</div>
						<div>
							<address>{location}</address>
						</div>
					</div>
					<div>
						<Link href="/"></Link>
					</div>
				</div>
			</li>
		);
	}
}

export default EventItem;
