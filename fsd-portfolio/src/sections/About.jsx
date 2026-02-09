import { TypeAnimation } from "react-type-animation";
import sample from "../media/sample.png";
import "../styles/about.css";

const About = () => {
  return (
    <div>
      <div className="container mt-2 p-4" style={{border:"1px solid white"}}>
        <div className="row">
          <div className="col-12 head1 text-center">
            Focused on learning, implementation, and user-friendly outcomes
          </div>
    <div className="container-fluid col-6 mt-5" >
 <TypeAnimation
  sequence={[
    "I create user-friendly applications with a strong focus on reusability and simple logic",
    1000,
    "I specialize in React, building interfaces that stay clean, intuitive, and never boring.",
    1000,
    "I create with passion, always aiming for experiences that feel natural to use and easy to maintain.",
    1000,
  ]}
  speed={30}
  wrapper="div"
  style={{ fontSize: "2em", lineHeight: "1.5em", whiteSpace: "pre-line" }}
  repeat={Infinity}
/>

</div>

          <div className="container-fluid col-4 mt-5">
            <img height={300} width={300} src={sample} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
