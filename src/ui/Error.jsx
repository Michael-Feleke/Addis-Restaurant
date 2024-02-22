import { useRouteError } from "react-router-dom";
import BackButton from "./BackButton";

function NotFound() {
  const error = useRouteError();

  return (
    <div className="text-center space-y-4 mt-48 flex flex-col items-center justify-center">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <BackButton to="-1">&larr; Go back</BackButton>
    </div>
  );
}

export default NotFound;
