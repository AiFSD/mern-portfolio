import "../styles/intro.css";
import Nav from "../components/Nav";

const Intro = () => {
  return (
    <div>
      <Nav />
      <div className="container  text-center">
        <div className="col">
          <div className="intro">
            <h1 className="mern animate__animated animate__fadeInUpBig">
              
              MERN
            </h1>
            <br />
            <h1 className="dev animate__animated animate__fadeInUpBig">
             
              DEVELOPER
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid row text-center mt-5">
      <div className="col">
          <h3 className="sub animate__animated animate__fadeInLeft">

Preferring Uniqueness Over 
          </h3>
      </div>
      <div className="col">
          <h3 className="sub animate__animated animate__fadeInRight">

          Cleverness In Development
          </h3>
      </div>
      </div>
    </div>
  );
};

export default Intro;
