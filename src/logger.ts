import { format } from "util";

type SEVERITY = "DEBUG" | "INFO" | "WARNING" | "ERROR";

/** Generate an Entry from the given message and severity and write it to standard output. */
const log = (severity: SEVERITY, message: any, jsonPayload?: any) => {
  const entry = {
    severity,
    message: format(message),
    jsonPayload,
  };
  console.log(JSON.stringify(entry));
};

/** Set serverity to DEBUG and write out the log. */
export const debug = (message: any, jsonPayload?: any) => log("DEBUG", message, jsonPayload);

/** Set serverity to INFO and write out the log. */
export const info = (message: any, jsonPayload?: any) => log("INFO", message, jsonPayload);

/** Set the serverity to WARNING and write out the log. */
export const warning = (message: any, jsonPayload?: any) => log("WARNING", message, jsonPayload);

/** Set the serverity to ERROR and write out the log. */
export const error = (message: any, jsonPayload?: any) => log("ERROR", message, jsonPayload);
