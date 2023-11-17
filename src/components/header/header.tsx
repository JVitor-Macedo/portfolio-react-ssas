import { FaRegHandPeace } from "react-icons/fa";
import "./header.scss";
import imgPerfil from "/src/assets/IMG_20230817_211542 (1).png"

const Header = () => {
  return (
    <header>
      <div className="perfil">
        <div className="title-name">
          <h1>
            Vitor Macedo <FaRegHandPeace />{" "}
          </h1>
          <h3>Desenvolvedor Front-end</h3>
        </div>
        <img src={imgPerfil} alt="" />
      </div>
    </header>
  );
};

export default Header;
