import { useEffect, useState } from "react";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { api } from "./services/api";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "./assets/logo-nlw-esports.svg";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/Input";

interface Game {
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

          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 fixed inset-0" />
            <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-xl">
              <Dialog.Title className="text-3xl text-white font-black">
                Publique um anúncio
              </Dialog.Title>

              <form className="mt-8 flex flex-col gap-4">
                <div>
                  <label
                    className="text-white text-base font-bold block leading-6 mb-2"
                    htmlFor="game"
                  >
                    Qual o game?
                  </label>
                  <Input
                    id="game"
                    type="text"
                    placeholder="Selecione o game que deseja jogar"
                  />
                </div>

                <div>
                  <label
                    className="text-white text-base font-bold block leading-6 mb-2"
                    htmlFor="name"
                  >
                    Seu nome (ou nickname)
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Como te chamam dentro do game?"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      className="text-white text-base font-bold block leading-6 mb-2"
                      htmlFor="yearsPlaying"
                    >
                      Joga há quantos anos?
                    </label>

                    <Input
                      id="yearsPlaying"
                      type="text"
                      placeholder="Tudo bem ser ZERO"
                    />
                  </div>

                  <div>
                    <label
                      className="text-white text-base font-bold block leading-6 mb-2"
                      htmlFor="discord"
                    >
                      Qual seu Discord?
                    </label>
                    <Input
                      id="discord"
                      type="text"
                      placeholder="Usuario#0000"
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-white text-base font-bold block leading-6 mb-2"
                      htmlFor="weekDays"
                    >
                      Quando costuma jogar?
                    </label>
                    <div className="grid grid-cols-4 gap-1 gap-x-0">
                      <button className="w-8 h-8 rounded bg-zinc-900">D</button>
                      <button className="w-8 h-8 rounded bg-zinc-900">S</button>
                      <button className="w-8 h-8 rounded bg-zinc-900">T</button>
                      <button className="w-8 h-8 rounded bg-zinc-900">Q</button>
                      <button className="w-8 h-8 rounded bg-zinc-900">Q</button>
                      <button className="w-8 h-8 rounded bg-zinc-900">S</button>
                      <button className="w-8 h-8 rounded bg-zinc-900">S</button>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <label
                      className="text-white text-base font-bold block leading-6 mb-2"
                      htmlFor="hourStart"
                    >
                      Qual horário do dia?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="hourStart" type="time" placeholder="De" />
                      <Input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  <input type="checkbox" name="" id="" />
                  Costumo me conectar no canal de voz
                </div>

                <footer className="flex justify-end mt-4 gap-4">
                  <Dialog.Close
                    type="button"
                    className="bg-zinc-500 px-5 h-12 rounded-md font-bold hover:bg-zinc-600"
                  >
                    Cancelar
                  </Dialog.Close>
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-violet-500 px-5 h-12 rounded-md font-bold hover:bg-violet-600"
                  >
                    <GameController weight="bold" size={24} />
                    Encontrar Duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}
