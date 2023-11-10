import "./footer.scss"
import { BsGlobeAmericas } from "react-icons/Bs"
import { IoMdSchool } from "react-icons/io"

const Footer = () => {
    return (
        <footer>
            <div className='educacao'>
                <h1> <IoMdSchool/> Educação</h1>
                <p>Kenzie Academy Desenvolvimento Full Stack</p>
                <br />
                <h1> <BsGlobeAmericas/>Linguagens</h1>
                <p>EN - Básico</p>
                <p>PT-BR - Fluente</p>
            </div>
        </footer>
    )
}

export default Footer