import timezones from "./index";
import timezoneData from "./data.json";

test("check random item should match", () => {
  const randomNumber = Math.floor((timezones.length - 1) * Math.random());
  console.log("length", timezones.length);
  console.log("randomNumber", randomNumber);
  expect(timezones[randomNumber].abbr).toBe(timezoneData[randomNumber].abbr);

  console.log("timezones", ...timezones.filter((item) => item.abbr === "AEST"));
  console.log("timezones type", typeof timezones[0]);
});
