import * as React from "react";
import { ScrollableLayout } from "../../../components/Themed";
import { Game } from "../../../types";
import GameListItem from "../../../components/games/GameListItem";

type Props = {
  gameArray: Array<Game>;
};

export default function savedGamesScreen(props: Props) {
  const { gameArray } = props;
  return (
    <ScrollableLayout>
      {gameArray.map((game: any, index) => (
        <GameListItem
          key={index}
          gameId={game.id}
          gameName={game.name}
          gameImage={game.small_capsule_image}
          genres={game.genres}
          description={game.description}
          publishers={game.developers}
          platforms={game.platforms}
          media={game.screenshots}
          rating={game.metacritic}
        />
      ))}
    </ScrollableLayout>
  );
}
