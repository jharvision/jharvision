export const JHARKHAND_FOUNDATION_DATE = new Date(2000, 10, 15, 0, 0, 0);
export const JHARKHAND_FOUNDATION_LABEL = "15 November 2000";
export const JHARKHAND_FOUNDATION_YEAR = 2000;

const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;

export type JourneyBreakdown = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function createSafeDate(
  year: number,
  month: number,
  day: number,
  hours: number,
  minutes: number,
  seconds: number
) {
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  return new Date(
    year,
    month,
    Math.min(day, lastDayOfMonth),
    hours,
    minutes,
    seconds
  );
}

function addYears(date: Date, years: number) {
  return createSafeDate(
    date.getFullYear() + years,
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
}

function addMonths(date: Date, months: number) {
  const absoluteMonth = date.getMonth() + months;
  const year = date.getFullYear() + Math.floor(absoluteMonth / 12);
  const month = ((absoluteMonth % 12) + 12) % 12;

  return createSafeDate(
    year,
    month,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
}

export function getJourneyBreakdown(now = new Date()): JourneyBreakdown {
  let years = now.getFullYear() - JHARKHAND_FOUNDATION_DATE.getFullYear();
  let yearAnchor = addYears(JHARKHAND_FOUNDATION_DATE, years);

  if (yearAnchor > now) {
    years -= 1;
    yearAnchor = addYears(JHARKHAND_FOUNDATION_DATE, years);
  }

  let months =
    (now.getFullYear() - yearAnchor.getFullYear()) * 12 +
    (now.getMonth() - yearAnchor.getMonth());
  let monthAnchor = addMonths(yearAnchor, months);

  if (monthAnchor > now) {
    months -= 1;
    monthAnchor = addMonths(yearAnchor, months);
  }

  let remainder = Math.max(0, now.getTime() - monthAnchor.getTime());

  const days = Math.floor(remainder / DAY_IN_MS);
  remainder -= days * DAY_IN_MS;

  const hours = Math.floor(remainder / HOUR_IN_MS);
  remainder -= hours * HOUR_IN_MS;

  const minutes = Math.floor(remainder / MINUTE_IN_MS);
  remainder -= minutes * MINUTE_IN_MS;

  const seconds = Math.floor(remainder / SECOND_IN_MS);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };
}
