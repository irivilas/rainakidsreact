import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './Pages/ItemListContainer';
import ItemDetailContainer from './Pages/ItemDetailContainer';
import Checkout from './Pages/Checkout';
import { CartContext } from './context/cartContext';
import Cart from './components/Cart';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cart" element={<Cart />} /> {}
      </Switch>
    </Router>
  );
}

export default App;
