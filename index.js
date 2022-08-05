import { generateCalendar } from './src/calendar.js';
import { writeFile } from 'node:fs/promises';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
	.options({
		'start': {
			alias: 's',
			describe: 'first date of the last period in YYYY-MM-DD format',
			demandOption: true
		},
		'output': {
			alias: 'o',
			describe: 'output file for a calendar',
			default: 'pregnancy-calendar.ics'
		}
	})
	.help()
	.version(false)
	.argv;

async function main({ start, output } = {}) {
	const { error, value } = generateCalendar({start});
	if (error) {
		console.error('Error during calendar creation', error);
	} else {
		// console.log(value);
		await writeFile(output, value);

	}
}

try {
	await main({ start: argv.start, output: argv.output });
	console.log(`Calendar was saved to ${argv.output}`)
} catch (err) {
	console.error(err)
}
