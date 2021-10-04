import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          
        <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/about'>
             <About></About>
          </Route>

          <Route path='/service'>
            <Service></Service>
          </Route>

          <Route path='/blog'>
            <Blogs></Blogs>
          </Route>
          
          <Route path='*'>  
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
