import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-7xl playfair font-bold">Oops!</h1>
      <p className="text-lg sanspro">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
