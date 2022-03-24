import * as timezones from "./data.json";
interface TimeZone {
  abbr: string;
  description: string;
  offset: string;
}
export default timezones as TimeZone[];
