import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Companies from './components/CompanyListings';
import JobListings from './components/JobListings';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import NoMatch404 from './components/NoMatch404';
import RegisterForm from './components/RegisterForm';

const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Ruta dinámica: <u>{props.match.params.routeVal}</u></h2>
}

const DemoComponent = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
  return <h2 style={styleObj}>Esta es una ruta de DEMO</h2>
}



class App extends React.Component {
  render (){
    return <div>
      <Switch>
        <Route path='/ex/:routeVal' component={DynamicRoute}/>
        <Route path='/demo' component={DemoComponent}/>
        <Route path='/companylistings' component={Companies}/>
        <Route path='/joblistings' component={JobListings}/>
        <Route path='/loginform' component={LoginForm}/>
        <Route path='/nav' component={Nav}/>
        <Route path='/nomatch404' component={NoMatch404}/>
        <Route path='/registerform' component={RegisterForm}/>
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
