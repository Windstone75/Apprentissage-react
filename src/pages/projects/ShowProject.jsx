import { useParams } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useToggle } from '../../hooks/useToggle';
import { Spinner } from '../../components/Spinner';
import { Alert } from '../../components/Alert';
import { EditProjectModal } from './EditProjectModal';
import { Button } from '../../components/Button';
import { useFetch } from '../../hooks/useFetch';

export function ShowProject() {
  const { id } = useParams();
  const {
    data: project,
    loading,
    error,
    setData,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  useDocumentTitle('My Personal Projects');

  const [isEditing, toggleEditing] = useToggle(false);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert type="danger">{error.toString()}</Alert>;
  }

  const handleSave = (data) => {
    setData({
      ...project,
      ...data,
    });
    toggleEditing();
  };

  return (
    <>
      <h1 className="mb-3">{project.title}</h1>
      <img
        src={`https://picsum.photos/id/${project.id}/800/600`}
        alt=""
        className="img-fluid img-thumbnail my-3"
      />
      <p>{project.body}</p>

      {isEditing && (
        <EditProjectModal
          project={project}
          onClose={toggleEditing}
          onSave={handleSave}
        />
      )}

      <Button variant="secondary" onClick={toggleEditing}>
        Edit project
      </Button>
      <p>
        <a href={`${project.id + 1}`}>Next projet</a>
      </p>
    </>
  );
}
