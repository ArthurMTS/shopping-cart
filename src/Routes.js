import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductInfo } from './pages/ProductInfo';
import { Cart } from './pages/Cart';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' component={ProductInfo} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}