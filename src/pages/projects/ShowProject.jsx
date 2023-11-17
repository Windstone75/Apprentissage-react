import { useParams } from 'react-router-dom';

export function ShowProject() {
  const { id } = useParams();
  return (
    <div>
      <h1>detail projet {id}</h1>
    </div>
  );
}
