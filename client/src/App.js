import React, {Component} from 'react';
import AppNavBar from './componets/AppNavBar';
import ShoppingList from './componets/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import store from './componets/store';
import {Container} from 'reactstrap';
import {loadUser} from './actions/authActions';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return(
      <Provider store = {store}>
        <div className = "App">
          <AppNavBar/>
          <Container>
            <ShoppingList />
          </Container>
        </div>
      </Provider>

    );
  }
}

export default App;