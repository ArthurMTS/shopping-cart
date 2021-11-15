import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart';

import './styles.css';

export function Product({ info }) {
  const { addProduct } = useContext(CartContext);

  return (
    <div className='product'>
      <img src={info.image} alt={info.title} />
      <Link to={'/products/' + info.id}>{info.title}</Link>
      <strong>U$ {info.price}</strong>
      <button onClick={() => addProduct(info)} >Add to Cart</button>
    </div>
  );
}