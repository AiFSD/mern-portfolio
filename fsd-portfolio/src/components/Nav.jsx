import "../styles/nav.css";
const Nav = () => {
  return (
    <div className="container text-center nav-con mt-5 ">
      <div className="row nav-con1" >
        <ul className="nav d-flex justify-content-center ">
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
                CONTACT
              </a>
            </li>
          </div>
          
        </ul>
      </div>
    </div>
  );
};

export default Nav;
