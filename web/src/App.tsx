import { useEffect, useState } from "react";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { api } from "./services/api";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "./assets/logo-nlw-esports.svg";
import { CreateAdModal } from "./components/Form/CreateAdModal";

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function getGames() {
      const { data } = await api.get("/games");
      setGames(data);
    }

    getGames();
  }, []);

  return (
    <div className="w-full h-screen bg-galaxy bg-no-repeat bg-cover">
      <div className="max-w-[1344px] mx-auto flex flex-col items-center pb-16">
        <img className="my-20" src={logoImg} alt="" />
        <h1 className="text-6xl text-white font-black">
          Seu{" "}
          <span className="bg-nlw-gradient bg-clip-text text-transparent">
            duo
          </span>{" "}
          está aqui
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map((game) => (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          ))}
        </div>

        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>
    </div>
  );
}
