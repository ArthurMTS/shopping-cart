import { Link } from 'react-router-dom';

import './styles.css';

export function Product({ info }) {
  return (
    <div className='product'>
      <img src={info.image} alt={info.title} />
      <Link to={'/products/' + info.id}>{info.title}</Link>
      <strong>U$ {info.price}</strong>
      <button>Add to Cart</button>
    </div>
  );
}