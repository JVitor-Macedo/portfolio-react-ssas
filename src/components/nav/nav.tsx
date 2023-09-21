import Card from "../card/card";
import "./nav";

const Nav = () => {
  return (
    <nav>
      <div className="Projetos">
        <h1>Meus Projetos</h1>
        <div>
          <div className="div-img">
            <img src="" alt="img-project" />
          </div>
          <Card />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
