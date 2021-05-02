import Contact from './Contact';
import About from './About';
import Home from './Home';
import Menu from './Menu';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const routes = [
  { 
    path: '/', 
    component: () => <h1>here</h1> 
  },
  { 
    path: '/about', 
    component: () => <h1>here</h1>  
  },
  { 
    path: '/contact', 
    component: () => <h1>here</h1>  
  }
]

function App() {
return (
  <Router>
    <Menu />
      <Switch>
        {routes.map((route) => {
          <Route
            path={route.path}
            exact={route.exact}
          >
            <route.component/>
          </Route>
        })}
        {/* <Route exact path="/" component={Home}></Route>
        <Route path="/about">
          <About greeting={'hi'}/>
        </Route>
        <Route path="/contact" component={Contact}></Route> */}
      </Switch>
  </Router>
  );
}

export default App;
