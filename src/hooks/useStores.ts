import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { Games } from "./useGames";

interface Stores {
  id: number;
  store_id: number;
  url: string;
}

const useStores = (game: Games) =>
  useQuery({
    queryKey: ["stores", game.parent_platforms],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Stores>>(`/games/${game.id}/stores`)
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useStores;
