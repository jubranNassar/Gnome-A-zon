import { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './screens/Home/Home.jsx';
import Products from './screens/Products/Products.jsx';
import ProductCreate from './screens/ProductCreate/ProductCreate.jsx';
import ProductDetails from './screens/ProductDetails/ProductDetails.jsx';
import ProductEdit from './screens/ProductEdit/ProductEdit.jsx';
import SignIn from './screens/SignIn/SignIn.jsx';
import SignOut from './screens/SignOut/SignOut.jsx';
import SignUp from './screens/SignUp/SignUp.jsx';

import './App.css';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Route exact path = '/'>
        < Home />
      </Route>

      <Route exact path = '/gnomes'>
        <Products />
      </Route>

      <Route path = '/gnomes/:id'>
        < ProductDetails />
      </Route>

      <Route path = "/edit/:id">
        < ProductEdit user={user}/>
      </Route>

      <Route exact path = "/create">
        < ProductCreate user={user}/>
      </Route>

      <Route exact path = "/sign-up">
        < SignUp setUser={setUser}/>
      </Route>

      <Route exact path = "/sign-in">
        < SignIn setUser={setUser}/>
      </Route>

      <Route exact path = "/sign-out">
        < SignOut />
      </Route>
    </div>
  );
}

export default App;
