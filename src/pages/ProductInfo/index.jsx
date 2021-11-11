import { useState, useEffect } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { api } from '../../services/api';

import './styles.css';

export function ProductInfo({ match }) {
  const [product, setProduct] = useState({});

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
        <img src={product.image} alt={product.title} />
        <p id='title'>{product.title}</p>
        <span id='category'>{product.category} - Rate: {product.rating ? product.rating.rate : ''}</span>
        <p id='description'>{product.description}</p>
        <strong>U$ {product.price}</strong>
        <button>Add to Cart</button>
      </main>
      <Footer />
    </>
  );
}