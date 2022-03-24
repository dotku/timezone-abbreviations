import timezones from "./data.json";

export interface TimeZone {
  abbr: string;
  description: string;
  offset: string;
  names?: string;
}

export default timezones as TimeZone[];
