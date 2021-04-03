import { InertiaLink } from "@inertiajs/inertia-react";
import { Fragment } from 'react';

export function Layout ({ children }) {
  return <Fragment>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <InertiaLink  className="navbar-brand" href="/">Properties.com</InertiaLink>
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="mb-2 navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <InertiaLink className="nav-link active" aria-current="page" href="/">Accueil</InertiaLink>
              </li>
              <li className="nav-item">
                <InertiaLink className="nav-link" href="#">Link</InertiaLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div className="container" style={{ marginTop: 20 + 'px', marginBottom: 50 + 'px' }}>
      { children }
    </div>
    <footer className="text-center text-white bg-dark">
      <div className="p-3 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className="text-white" href="https://cv-en-ligne.vercel.app/">Sylvain Macabrey</a>
      </div>
    </footer>
  </Fragment>
}
