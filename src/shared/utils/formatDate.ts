// Utils
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export const formatCreatedDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, "dd/MM/yyyy");
  } catch (error) {
    console.error(error);
    return "";
  }
};

export default formatCreatedDate;
