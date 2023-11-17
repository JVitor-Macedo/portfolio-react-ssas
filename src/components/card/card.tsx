import "./card.scss";
import imgEcomerce from "/src/assets/e-comerce.png"
import imgConnect from "/src/assets/conect-dev.png"
import imgMobile from "/src/assets/Screenshot (3).png"



const Card = () => {
  return (
    <ul className="projects">
      <li className="div-title-project">
        <img src={imgConnect} alt="img-project" />
        <div className="title">
          <h2>
            ConnectDevs
          </h2>
        </div>
        <div className="div-btns">
          <button> <a target="_blank" href="https://connect-devs-ten.vercel.app/login">Ver Projeto</a></button>
          <button> <a target="_blank" href="https://github.com/ConnectDevs/ConnectDevs">Github</a></button>
        </div>
      </li>
      <li className="div-title-project">
        <img src={imgEcomerce} alt="img-project" />
        <div className="title">
          <h2>
            E-commerce
          </h2>
        </div>
        <div className="div-btns">
          <button> <a target="_blank" href="https://ecommerce-react-ottfyl07s-jvitor-macedo.vercel.app/">Ver Projeto</a></button>
          <button> <a target="_blank" href="https://github.com/JVitor-Macedo/Ecommerce-react">Github</a> </button>
        </div>
      </li>
      <li className="div-title-project">
        <img src={imgMobile} alt="img-project" />
        <div className="title">
          <h2>
            Mobile Project
          </h2>
        </div>
        <div className="div-btns">
          <button>Ver Projeto</button>
          <button><a target="_blank" href="https://github.com/JVitor-Macedo/react-native-IMC">Github</a> </button>
        </div>
      </li>
    </ul>

  );
};

export default Card;
