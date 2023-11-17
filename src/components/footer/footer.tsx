import "./footer.scss"
import imgEduc from "/src/assets/diplomado.png"
import imgTrad from "/src/assets/traduzir.png"


const Footer = () => {
    return (
        <footer>
            <div className='educacao'>
                <h1> <img src={imgEduc} alt="" /> Educação</h1>
                <p>Kenzie Academy Desenvolvimento Full Stack</p>
                <br />
                <h1> <img src={imgTrad} alt="" /> Linguagens</h1>
                <p>EN - Básico</p>
                <p>PT-BR - Fluente</p>
            </div>
        </footer>
    )
}

export default Footer