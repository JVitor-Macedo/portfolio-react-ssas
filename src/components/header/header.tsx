import { FaRegHandPeace } from "react-icons/fa";
import "./header.scss";

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
        <img src="/src/assets/IMG_20230817_211542 (1).png" alt="" />
      </div>
    </header>
  );
};

export default Header;
