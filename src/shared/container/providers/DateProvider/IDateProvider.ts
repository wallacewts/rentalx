export default interface IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number;
  compareInDays(start_date: Date, end_date: Date): number;
  convertTouUTC(date: Date): string;
  dateNow(): Date;
}
