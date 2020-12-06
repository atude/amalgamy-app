import React, { useState, useEffect } from "react";
import { ScrollableLayout } from "../../../components/Themed";
import { Game } from "../../../types";
import GameListItem from "../../../components/games/GameListItem";
import { AppContext } from "../../../context";

type ExtractedGameData = {
  name: string;
  platforms: Record<string, unknown>;
  header_image: string;
  genres: Record<string, unknown>[];
  steam_appid: number;
  about_the_game: string;
  developers: Array<string>;
  screenshots: Record<string, unknown>;
  metacritic: Array<string>;
};

export default function savedGamesScreen() {
  const { user } = React.useContext(AppContext);
  const [gameArray, setGameArray] = useState<any[]>([]);

  const getGameDetails = async () => {
    if (user) {
      for (const gameId of user?.bookmarks) {
        const res = await fetch(
          `http://store.steampowered.com/api/appdetails?appids=${gameId}&cc=au&l=en`
        );
        const data = await res.json();
        const gameData = data[gameId]?.data ?? undefined;
        if (data && gameData) {
          const game: ExtractedGameData = {
            name: gameData.name,
            platforms: gameData.platforms,
            header_image: gameData["header_image"],
            genres: gameData.genres || [],
            steam_appid: gameData.steam_appid,
            about_the_game: gameData.about_the_game,
            developers: gameData.developers,
            screenshots: gameData.screenshots,
            metacritic: gameData.metacritic,
          };
          setGameArray((arr) => [...arr, game]);
        }
      }
    }
  };

  useEffect(() => {
    getGameDetails();
  }, [user]);

  return (
    <ScrollableLayout>
      {gameArray.map((game: any, index) => (
        <GameListItem
          key={index}
          gameId={game.id}
          gameName={game.name}
          gameImage={game.header_image}
          genres={game.genres}
          description={game.about_the_game}
          publishers={game.developers}
          platforms={game.platforms}
          media={game.screenshots}
          rating={game.metacritic}
        />
      ))}
    </ScrollableLayout>
  );
}
