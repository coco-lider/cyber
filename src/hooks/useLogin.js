import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.post("https://dummyjson.com/auth/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res;
    },
  });
};