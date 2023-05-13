import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CrtiticScore from "./CrtiticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CrtiticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
        {/* <GameStores game={game} /> */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
