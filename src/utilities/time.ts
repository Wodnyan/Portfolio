// Returns a time format looking like so: HH:MM AM/PM.
export const dateToTime = () => {
  const date = new Date();
  const militaryHours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = amOrPm(militaryHours);
  const twelveHourFormat = militaryHours % 12;

  const time = `${appendZeroToEnd(twelveHourFormat)}:${appendZeroToEnd(
    minutes
  )} ${amPm}`;

  return time;
};

const amOrPm = (hour: number) => (hour < 12 ? "AM" : "PM");

// If number is lower than 10 append a 0 to the end.
export const appendZeroToEnd = (number: number) => {
  return number < 10 ? "0" + number.toString() : number;
};
