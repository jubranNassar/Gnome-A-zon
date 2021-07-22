import { useState, useEffect } from 'react';
import { verifyUser } from "./services/users";
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

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Route exact path = '/'>
        < Home user={user} />
      </Route>

      <Route exact path = '/gnomes'>
        <Products user={user} />
      </Route>

      <Route path = '/gnomes/:id'>
        < ProductDetails user={user}/>
      </Route>

      <Route path = "/edit/:id">
        < ProductEdit user={user}/>
      </Route>

      <Route exact path = "/create">
        < ProductCreate user={user}/>
      </Route>

      <Route exact path = "/sign-up">
        < SignUp setUser={setUser} user={user}/>
      </Route>

      <Route exact path = "/sign-in">
        < SignIn setUser={setUser} user={user}/>
      </Route>

      <Route exact path = "/sign-out">
        < SignOut setUser={setUser}/>
      </Route>
    </div>
  );
}

export default App;
