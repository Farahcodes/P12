// eslint-disable-next-line no-unused-vars
import { ReactElement } from 'react';

import './styles/Nav.css';
import { ReactComponent as Logo } from './resources/logo.svg';
import { ReactComponent as Icon1 } from './resources/icon1.svg';
import { ReactComponent as Icon2 } from './resources/icon2.svg';
import { ReactComponent as Icon3 } from './resources/icon3.svg';
import { ReactComponent as Icon4 } from './resources/icon4.svg';

/**
 * NavTop component
 *
 * @return {ReactElement} Return a header component with navigation
 */
export function NavTop() {
  return (
    <header className="nav-t">
      <Logo className="logo" />
      <nav>
        <div className="nav-list">
          <a href=" " className="nav-list-item">
            Home
          </a>
          <a href=" " className="nav-list-item">
            Profil
          </a>
          <a href=" " className="nav-list-item">
            Settings
          </a>
          <a href=" " className="nav-list-item">
            Community
          </a>
        </div>
      </nav>
    </header>
  );
}

/**
 * NavLeft component
 *
 * @return {ReactElement} Return an aside component with navigation
 */
export function NavLeft() {
  return (
    <aside className="nav-l">
      <nav>
        <div className="nav-list">
          <a href=" " className="nav-list-icon">
            <Icon1 />
          </a>
          <a href=" " className="nav-list-icon">
            <Icon2 />
          </a>
          <a href=" " className="nav-list-icon">
            <Icon3 />
          </a>
          <a href=" " className="nav-list-icon">
            <Icon4 />
          </a>
        </div>
        <p className="copyright">Copiryght, SportSee 2023</p>
      </nav>
    </aside>
  );
}
