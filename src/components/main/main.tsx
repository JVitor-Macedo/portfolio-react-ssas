import "./main.scss";
import Footer from "../footer/footer";
import imgGit from "/src/assets/github.png"
import imgLinkedin from "/src/assets/linkedin.png"
import imgInsta from "/src/assets/instagram.png"
import imgWpp from "/src/assets/whatsapp.png"

const Main = () => {
  return (
    <main>
      <div className="social">
        <a target="_blank" href="https://www.linkedin.com/in/vitor-macedo-4a90a5246/">
          <img src={imgLinkedin} alt="" />
        </a>
        <a target="_blank" href="https://github.com/JVitor-Macedo">
        <img src={imgGit} alt="" />
        </a>
        <a target="_blank" href="https://www.instagram.com/j.vitor_macedo/">
        <img src={imgInsta} alt="" />
        </a>
      </div>
      <div className="contato">
          <a target="_blank" href="https://api.whatsapp.com/send?phone=+5571981234624&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os">CONTATE-ME <img src={imgWpp} alt="" /> </a> 
      </div>
      <div className="experiencia">
        <h2>Experiência</h2>
        <p>
          Desenvolvimento de Interfaces Responsivas com domínio de tecnologias
          Front-end e experiência em projetos em equipe! <br />
          TypeScript | React Native | Saas | NextJS | NodeJs | Styled Comnentes
        </p>
        <div className="tecnologias">
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Main;
