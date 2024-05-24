import {Link} from 'react-router-dom'

const NavComponent = () => {
  return (
    <div>
       <nav>
        <ul >
          <li>
            <Link to="/" className='linkAppName'>My Social Circle</Link>
          </li>
          <li>
            <Link to="/form" className='linkBackground'>+</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavComponent
