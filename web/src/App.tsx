import logoImg from "./assets/logo-nlw-esports.svg";

export function App() {
  return (
    <div className="w-full h-screen bg-galaxy bg-no-repeat bg-cover flex flex-col items-center">
      <img className="my-20" src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui
      </h1>
    </div>
  );
}
