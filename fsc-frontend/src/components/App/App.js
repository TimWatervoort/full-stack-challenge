import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import IndexPage from 'components/IndexPage';
import Navbar from 'components/Navbar';

function App(props) {
  const { theme } = props;
  return (
    <div className={`App App-${theme}`}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={IndexPage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  theme: PropTypes.string
}

App.defaultProps = {
  theme: 'light'
}

export default App;