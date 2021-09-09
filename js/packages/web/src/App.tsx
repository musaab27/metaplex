import React from 'react';
import { Routes } from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import { What } from './components/FrontPage/What';
import { Faq } from './components/FrontPage/FAQ';
import { Header } from './components/FrontPage/Header';


const Main = () => {

  return (
    <div>
      <Header/>
      <What/>
      <Faq/>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Providers>
      <Switch>
      {/* <Routes /> */}
        <Route exact path="/" component={Main}></Route>
      </Switch>
      </Providers>
    </Router>
  );
}

export default App;
