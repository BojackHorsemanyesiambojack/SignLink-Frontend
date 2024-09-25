import NotFoundBear from "../../../assets/Images/404NotFound.png";

export default function NotFound() {
  return (
    <div className="items-center justify-center flex flex-col h-full">
      <div className="bg-zinc-950 items-center flex flex-col rounded-md p-12 border border-zinc-900">
        <img
          src={NotFoundBear}
          alt="Confused polar bear for 404 error"
          className="w-56 h-56"
        />
        <h3 className="text-3xl">404 Not Found</h3>
        <p className="text-md text-zinc-600">
          El elemento que buscabas no existe.
        </p>
      </div>
    </div>
  );
}
