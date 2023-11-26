import dayjs from "dayjs";

export function format(day: string | number | Date, format: string) {
  return dayjs(day).format(format);
}
