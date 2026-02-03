import "../styles/nav.css"
const Nav = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row align-items-start">
        <ul className="nav justify-content-center ">
          <div className="col">
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
          </div>
          <div className="col">
            <li className="nav-item">
              <a className="nav-link" href="#">
                WORKS
              </a>
            </li>
          </div>
          <div className="col">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Collobrations
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
