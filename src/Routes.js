import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}