import './navbar.css';
import { Link } from 'inferno-router';

export default () => (
  <nav className="navigation">
    <section className="container">
      <Link className="navigation-title" to="/"><h1 className="title">Contest Portal</h1></Link>
      {!window.email ?
        <ul className="navigation-list float-right">
          <li className="navigation-item"><Link to='/login' className="navigation-link">Login</Link></li>
        </ul>
        :
        <ul className="navigation-list float-right">
          <li className="navigation-item navigation-link"> Hello {window.email} </li>
          <li className="navigation-item"><Link to='/logout' className="navigation-link">Logout</Link></li>
        </ul>
      }
    
    </section>
  </nav>
)
