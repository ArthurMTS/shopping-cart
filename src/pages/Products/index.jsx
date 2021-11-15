import { useState, useEffect } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Product } from '../../components/Product';
import { Loading } from '../../components/Loading';

import { api } from '../../services/api';

import './styles.css';

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function handleRequest() {
      const result = await api.get('/products');

      setProducts(result.data);
    }

    handleRequest();
  }, []);

  return (
    <>
      <Header />
      <main id='product-list'>
        {
          products.length > 0 ? 
            products.map(product => (
              <Product key={product.id} info={product} />
            )) :
            <Loading />
        }
      </main>
      <Footer />
    </>
  );
}