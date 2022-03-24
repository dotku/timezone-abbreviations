import timezones from "./index";
import timezoneData from "./data.json";

test("check random item should match", () => {
  const randomNumber = Math.floor(timezones.length * Math.random() * 10);
  console.log("timezones", ...timezones.filter((item) => item.abbr === "AEST"));
  expect(timezones[randomNumber].abbr).toBe(timezoneData[1].abbr);
  console.log("timezones type", typeof timezones[0]);
  console.log("timezones", ...timezones.filter((item) => item.abbr === "AEST"));
});
