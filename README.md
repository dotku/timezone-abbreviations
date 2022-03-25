# Timezone Abbreviations

JavaScript doesn't provide abbreviations list, and moment.js might be overkill
for my project, so I create a package and get the timezone abbreviations data
from <https://en.wikipedia.org/wiki/List_of_time_zone_abbreviations> and extract
zone string from moment.js and verified by `Intl.DateTimeFormat`.

## Usage

```bash
npm install timezone-abbreviations
```

```js
import timezones from "timezone-abbreviations";

console.log(
  "timezone",
  ...timezones.filter((item) => item.abbr === "AEST") 
);

// output:
// {
//   abbr: 'AEST',
//   description: 'Australian Eastern Standard Time',
//   offset: 'UTC+10',
//   names: [
//     'Australia/Brisbane',
//     'Australia/Lindeman',
//     'Australia/Queensland'
//   ]
// }
```
