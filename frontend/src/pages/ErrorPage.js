import { useRouteError } from "react-router-dom";
import ParticlesComponent from "../components/ParticlesComponent";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen w-screen">
      <div
        className="z-10 h-full white-text w-full flex flex-col items-center justify-center gap-5"
        style={{ backgroundColor: "#00054c" }}
      >
        <h1 className="text-7xl playfair font-bold">Oops!</h1>
        <p className="text-lg sanspro">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-lg">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <ParticlesComponent />
    </div>
  );
}
