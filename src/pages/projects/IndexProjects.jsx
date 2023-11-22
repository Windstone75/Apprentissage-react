import { Suspense } from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';
import { Await, useAsyncValue, useLoaderData } from 'react-router-dom';
import { Spinner } from '../../components/Spinner.jsx';
import { Card } from '../../components/Card.jsx';

export function IndexProjects() {
  useDocumentTitle('My Personal Projects');
  const { projects } = useLoaderData();
  return (
    <>
      <h1>Mes projets</h1>
      <Suspense fallback={<Spinner />}>
        <Await resolve={projects}>
          <ProjectList />
        </Await>
      </Suspense>
    </>
  );
}

function ProjectList() {
  const projects = useAsyncValue();
  return (
    <div className="row gap-4">
      {projects.map((project) => (
        <div key={project.id} className="col-12 col-md-4">
          <Card
            image={`https://picsum.photos/id/${project.id}/280/180`}
            title={project.title}
            description={project.body}
            href={`projects/${project.id}`}
            buttonLabel="Voir l'article"
          />
        </div>
      ))}
    </div>
  );
}
