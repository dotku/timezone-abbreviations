import timezones from "./index";
import timezoneData from "./data.json";

console.assert(
  timezones[0].abbr === timezoneData[1].abbr,
  "'\x1b[31m%s\x1b[0m'",
  "timezone data is not matching"
);
console.log("timezones type", typeof timezones[0]);
console.log("timezones", ...timezones.filter((item) => item.abbr === "AEST"));
