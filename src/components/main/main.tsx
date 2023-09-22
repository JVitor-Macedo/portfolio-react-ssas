import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/Ai";
import "./main.scss";

const Main = () => {
  return (
    <main>
      <div className="social">
        <AiFillLinkedin />
        <AiFillGithub height="5em" width="5em" />
        <FaInstagramSquare height="5px" width="5px" />
      </div>
      <div className="contato">
        <button className="Contato">CONTATE-ME</button>
      </div>
      <div className="experiencia">
        <h2>Experiência</h2>
        <p>
          Desenvolvimento de Interfaces Responsivas com domínio de tecnologias
          Front-end e experiência em projetos em equipe
        </p>
        <div>TS, JS, React, NodeJs, API</div>
      </div>
    </main>
  );
};

export default Main;
