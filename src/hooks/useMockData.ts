import { useQuery } from "@tanstack/react-query";
import { mockApi } from "../api/mockApi";

export function useMockData() {
  return useQuery({
    queryKey: ["mockData"],
    queryFn: async () => {
      return await mockApi();
    },
  });
}
