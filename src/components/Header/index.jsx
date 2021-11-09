import { Link } from 'react-router-dom';

import shoppingBag from '../../assets/shopping-bag.svg';
import shoppingCart from '../../assets/shopping-cart.svg';
import './styles.css';

export function Header() {
  return (
    <header id='main-header'>
      <Link id='home-link' to='/'>
        <img src={shoppingBag} alt='bag icon' />
        <h1>FakeStore</h1>
      </Link>
      <nav id='navbar'>
        <ul>
          <li className='nav-link'><Link to='/'>Home</Link></li>
          <li className='nav-link'><Link to='/products'>Products</Link></li>
          <li id='cart' className='nav-link'><Link to='/cart'><img src={shoppingCart} alt='cart icon'/>0</Link></li>
        </ul>
      </nav>
    </header>
  );
}