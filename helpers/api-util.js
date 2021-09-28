export const fetchAllEvents = async () => {
	const response = await fetch('https://nextjs-course-87bab-default-rtdb.firebaseio.com/events.json');
	const data = await response.json();

	const transformedData = [];
	for (const key in data) {
		transformedData.push({
			id: key,
			...data[key],
		});
	}

	return transformedData;
};

export const fetchFeaturedEvents = async () => {
	const events = await fetchAllEvents();
	const featuredEvents = events.filter((item) => item.isFeatured);
	return featuredEvents;
};

export async function fetchEventById(id) {
	const events = await fetchAllEvents();
	return events.find((event) => event.id === id);
}

export async function fetchFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;
	const events = await fetchAllEvents();

	let filteredEvents = events.filter((event) => {
		const eventDate = new Date(event.date);
		return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
	});

	return filteredEvents;
}
