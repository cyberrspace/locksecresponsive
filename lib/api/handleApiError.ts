import axios from "axios";

export const getApiErrorMessage = (error: unknown): string => {
  // Axios error (most API calls)
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ||
      error.message ||
      "Something went wrong"
    );
  }

  // Native JS Error
  if (error instanceof Error) {
    return error.message;
  }

  // Anything else (string, object, number, etc.)
  return "Something went wrong";
};


