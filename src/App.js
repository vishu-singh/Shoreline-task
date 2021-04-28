import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { UserListing } from './components/Products/UserListing';

import { AddUser } from './components/Products/AddUser';
import 'react-toastify/dist/ReactToastify.css';
import { MainLayout } from './components/Layouts/MainLayout';

function App() {


  return (
    <>
      <Router>
        <Switch>
          <MainLayout>
          <Route exact path="/" component={UserListing} />
            <Route exact path="/users" component={UserListing} />
            <Route exact path="/users/add" component={AddUser} />
     
          </MainLayout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
