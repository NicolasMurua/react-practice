// import PropTypes from 'prop-types'
import Button from "./Button"

function Header ({tittle}) {
  const onClick = () => {
    console.log('click');
  }
  return (
    <header className='header'>
        <h1>{tittle}</h1>
        <Button color='green' text='Hello' onClick={onClick}/>
    </header>
  )
}

// Header.defaultProps = {
//     tittle: 'Task Traker'
// }

// Header.propTypes = {
//     tittle: PropTypes.string.isRequired
// }
//se puede agregar esto para hacerlo mas typescript

//CSS in JS
// const headerStyle = {
//     color: 'red', 
//     backgroundColor: 'blue'
// }
//<h1 style={{color: 'red', backgroundColor: 'blue'}}>{tittle}</h1>


export default Header