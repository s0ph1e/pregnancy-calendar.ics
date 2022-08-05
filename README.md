# pregnancy-calendar.ics

Create [.ics file](https://en.wikipedia.org/wiki/ICalendar) with pregnancy weeks which can be easily imported to many calendar applications including Google Calendar, Apple Calendar, Microsoft Outlook and others.

![Screenshot with calendar example](/docs/screenshot.png)

## Usage

* Install Node.js version 16+
* Install dependencies
  ```bash
  npm i
  ```
* Run the script with options:
    * `--startDate or -s` stands for the first day of the last period in YYYY-MM-DD format, required
    * `--output or -o` - stands for the output file, optional, "pregnancy-calendar.ics" by default

  ```bash
  node index.js -s 2021-05-20
  ```
