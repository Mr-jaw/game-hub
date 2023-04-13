import useStores from "../hooks/useStores";
import { Games } from "../hooks/useGames";
import {
  FaSteam,
  FaMicrosoft,
  FaPlaystation,
  FaAppStoreIos,
  FaXbox,
  FaGooglePlay,
  FaItchIo,
} from "react-icons/fa";
import { SiGogdotcom, SiNintendoswitch, SiEpicgames } from "react-icons/si";
import { HStack, Icon, Link, Skeleton } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  game: Games;
}

const GameStores = ({ game }: Props) => {
  const { data, error, isLoading } = useStores(game);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const storeMap: { [key: number]: IconType } = {
    1: FaSteam,
    2: FaMicrosoft,
    3: FaPlaystation,
    4: FaAppStoreIos,
    5: SiGogdotcom,
    6: SiNintendoswitch,
    7: FaXbox,
    8: FaGooglePlay,
    9: FaItchIo,
    11: SiEpicgames,
  };

  if (error) return null;

  return (
    <fieldset>
      <legend>Stores</legend>
      <HStack>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Skeleton key={skeleton} height={"20px"} width={"20px"} />
          ))}
        {data.map((store) => (
          <Link
            className="link"
            target="_blank"
            href={store.url}
            key={store.id}
          >
            <Icon
              as={storeMap[store.store_id]}
              color="gray.500"
              transition=".3s ease"
              _hover={{ color: "gray.100" }}
            />
          </Link>
        ))}
      </HStack>
    </fieldset>
  );
};

export default GameStores;
