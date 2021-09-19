import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import { FaPlus } from 'react-icons/fa'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  
  return (
    <header className="header">
      <h1>{ title }</h1>
      {location.pathname === '/' && (
        <Button 
          color={ showAdd ? 'red' : 'green'} 
          text={ showAdd ? 'Cerrar' : <FaPlus/> } 
          onClick={onAdd} 
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Manager'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }
export default Header
