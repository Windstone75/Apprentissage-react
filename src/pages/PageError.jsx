import { useRouteError } from 'react-router-dom';

export function PageError() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>Une erreur est survenu</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </>
  );
}
