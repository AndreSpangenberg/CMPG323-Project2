import React, {Component} from 'react';
import AppNavBar from './components/AppNavBar';
import homeSection from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import store from './components/store';
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
            <homeSection />
          </Container>
        </div>
      </Provider>

    );
  }
}

export default App;