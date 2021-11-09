import shoppingBag from '../../assets/shopping-bag.svg';
import shoppingCart from '../../assets/shopping-cart.svg';
import './styles.css';

export function Header() {
  return (
    <header id='main-header'>
      <a id='home-link' href="#">
        <img src={shoppingBag} alt='bag icon' />
        <h1>FakeStore</h1>
      </a>
      <nav id='navbar'>
        <ul>
          <li className='nav-link'><a href="#">Home</a></li>
          <li className='nav-link'><a href="#">Products</a></li>
          <li id='cart' className='nav-link'><a href="#"><img src={shoppingCart} alt='cart icon'/>0</a></li>
        </ul>
      </nav>
    </header>
  );
}