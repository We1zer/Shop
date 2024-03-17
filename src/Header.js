export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-primary border-bottom box-shadow mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            BulkyWeb
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Privacy">
                  Privacy
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
