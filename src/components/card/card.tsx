import "./card.scss";



const Card = () => {
  return (
    <ul className="projects">
      <li className="div-title-project">
        <img src="/src/assets/conect-dev.png" alt="img-project" />
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
        <img src="/src/assets/e-comerce.png" alt="img-project" />
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
        <img src="/src/assets/Screenshot (3).png" alt="img-project" />
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
