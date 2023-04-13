import useData from "./useData";
import { Games } from "./useGames";

interface Stores {
  id: number;
  store_id: number;
  url: string;
}

const useStores = (game: Games) => useData<Stores>(`/games/${game.id}/stores`);

export default useStores;
