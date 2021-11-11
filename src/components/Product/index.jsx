import './styles.css';

export function Product({ info }) {
  return (
    <div className='product'>
      <img src={info.image} alt={info.title} />
      <p>{info.title}</p>
      <strong>U$ {info.price}</strong>
      <button>Add to Cart</button>
    </div>
  );
}