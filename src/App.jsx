import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  defer,
} from 'react-router-dom';
import { PageError } from './pages/PageError.jsx';
import { IndexProjects } from './pages/projects/IndexProjects.jsx';
import { ShowProject } from './pages/projects/ShowProject.jsx';

import { Header } from './components/Header.jsx';

import './styles/johndoe.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: 'about',
        element: <div>Page About</div>,
      },
      {
        path: 'resume',
        element: <div>Page resume</div>,
      },
      {
        path: 'projects',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <IndexProjects />,
            loader: () => {
              const projects = fetch(
                'https://jsonplaceholder.typicode.com/posts?_limit=10'
              ).then((r) => r.json());
              return defer({
                projects,
              });
            },
          },
          {
            path: ':id',
            element: <ShowProject />,
          },
        ],
      },
      {
        path: 'contact',
        element: <div>Contact TODO</div>,
      },
      {
        path: 'resume',
        element: <div>Page REsule TODO</div>,
      },
      {
        path: 'admin',
        element: <div>Page ADMIN TODO</div>,
      },
    ],
  },
]);

//Structure racine site (Niveau 1)
function Root() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <Outlet />
      </div>
    </>
  );
}

//mise en place du routeur
function App() {
  return <RouterProvider router={router} />;
}

export default App;
/** 

  return (
    <>
     
      <div className="container my-3">
        <ErrorBoundary FallbackComponent={PageError}>
          {pageContent}
        </ErrorBoundary>
      </div>
    </>
  );
}

function PageError({ error }) {
  return <Alert type="danger">{error.toString()}</Alert>;
}


*/
