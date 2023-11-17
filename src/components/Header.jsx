import { NavLink } from 'react-router-dom';
import { useToggle } from '../hooks/useToggle.js';
/**
 * @param {string} page
 */
export function Header() {
  const [expanded, toggleExpanded] = useToggle(false);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MonSite
        </a>
        <button
          onClick={toggleExpanded}
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/About'}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/Resume'}>Resume</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/projects'}>PersonalProjects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/admin'}>admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
