import { generateCalendar } from './src/calendar.js';
import { writeFile } from 'node:fs/promises';

async function main(start) {
	const { error, value } = generateCalendar({start});
	if (error) {
		console.error('Error during calendar creation', error);
	} else {
		console.log(value);
		await writeFile('events.ics', value);
	}
}

main('2021-01-01')
	.then(() => console.log('Done!'))
	.catch((err) => console.error(err));
