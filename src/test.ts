import timezones from "./index";

console.log("timezones", timezones);

console.log("timezones", ...timezones.filter((item) => item.abbr === "AEST"));
