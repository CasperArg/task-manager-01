import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">
        <button className="btn boton-simple">
          Acerca de la app
        </button>
      </Link>
    </footer>
  )
}

export default Footer
