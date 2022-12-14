import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8">
      <div className="bg-[#2a2634] py-6 px-8 rounded-md flex items-center justify-between">
        <div>
          <strong className="text-2xl text-white font-black">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="flex items-center justify-center gap-3 font-bold rounded text-white py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-colors">
          <MagnifyingGlassPlus weight="bold" size={24} />
          Publique anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
