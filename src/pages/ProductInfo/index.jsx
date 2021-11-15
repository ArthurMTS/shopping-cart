import { useState, useEffect, useContext } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { api } from '../../services/api';
import { CartContext } from '../../contexts/cart';

import './styles.css';
import { Loading } from '../../components/Loading';

export function ProductInfo({ match }) {
  const [product, setProduct] = useState({});

  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    async function handleRequest() {
      const { id } = match.params;

      const result = await api.get(`products/${id}`);

      setProduct(result.data);
    }

    handleRequest();
  }, [match]);

  return (
    <>
      <Header />
      <main id='product-info'>
        {
          product.hasOwnProperty('id') ? 
            <>
              <img id='product-image' src={product.image} alt={product.title} />
              <p id='title'>{product.title}</p>
              <span id='category'>{product.category} - Rate: {product.rating ? product.rating.rate : ''}</span>
              <p id='description'>{product.description}</p>
              <strong>U$ {product.price}</strong>
              <button onClick={() => addProduct(product)}>Add to Cart</button>
            </> :
            <Loading />
        }
      </main>
      <Footer />
    </>
  );
}