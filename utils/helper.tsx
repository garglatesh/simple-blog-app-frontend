// utils/helper.tsx
import moment from "moment";

/**
 * Utility function to format a date string to "Month Day, Year".
 * @param dateString - The date string to format.
 * @returns The formatted date string.
 */
export const formatDate = (dateString: string): string => {
  return moment(dateString).format('MMMM DD, YYYY');
};
  