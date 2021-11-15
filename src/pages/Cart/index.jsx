import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { CartContext } from '../../contexts/cart';

import trashIcon from '../../assets/trash-2.svg';

import './styles.css';

export function Cart() {
  const { cart, removeProduct, changeQuantity } = useContext(CartContext);

  return (
    <>
      <Header />
      <main id='cart-page'>
        <h2>Take a look at your cart!</h2>
        <ul id='list'>
          {
            cart.length > 0 ? cart.map(product => (
              <li key={product.id} className='cart-item'>
                <Link to={'/products/' + product.id}>{product.title}</Link>
                <div>
                  <strong>U$ {(product.price * product.quantity).toFixed(2)}</strong>
                  <input type='number' min='1' value={product.quantity} onChange={(e) => changeQuantity(product.id, e.target.value)} />
                  <button onClick={() => removeProduct(product.id)}>
                    <img src={trashIcon} alt='Trash Icon' />
                  </button>
                </div>
              </li>
            )) :
            <p>Oh, well...</p>
          }
        </ul>
        <div id='total'>
          <p><strong>Total:</strong> U$ {cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      </main>
      <Footer />
    </>
  );
}