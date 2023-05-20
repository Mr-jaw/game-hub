import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Games } from "./useGames";

const apiClient = new APIClient<GameDetails>("/games");

interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
}

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
