import assert from 'node:assert'
import ics from 'ics';
import dayjs from 'dayjs';

const WEEKS_COUNT = 42;

function getDateParts(date) {
	assert(date, 'date should be provided');

	const year = date.get('year');
	const month = date.get('month') + 1; // months are zero-indexed
	const day = date.get('date');
	const hours = 0;
	const minutes = 0;

	console.log('Parsed date:', {year, month, day, hours, minutes});

	return {year, month, day, hours, minutes};
}

function getDateObject(dateString) {
	assert(dateString, 'dateString should be provided');

	const date = dayjs(dateString, 'YYYY-MM-DD', true);
	if (!date.isValid()) {
		throw new Error(`Date ${dateString} is not valid, please provide a date in YYYY-MM-DD format`);
	}

	return date;
}

function generateEvents(startDate, weeksCount) {
	assert(startDate, 'startDate should be provided');
	assert(weeksCount, 'weeksCount should be provided');

	const events = [];

	for (let i = 0; i <= weeksCount; i++) {
		const currentWeekStart = startDate.add(i, 'week');
		const { year, month, day, hours, minutes } = getDateParts(currentWeekStart);

		const event = {
			start: [year, month, day, hours, minutes],
			duration: { days: 7 },
			title: `week ${i}`,
			//description: '',
			status: 'CONFIRMED',
			busyStatus: 'FREE',
			calName: 'Pregnancy calendar'
		}

		events.push(event);
	}

	return events;
}

function generateCalendar ({ start, weeksCount = WEEKS_COUNT } = {}) {
	assert(start, 'start should be provided');

	const startDate = getDateObject(start);
	const events = generateEvents(startDate, weeksCount);

	return ics.createEvents(events);
}

export {
	generateCalendar
}
