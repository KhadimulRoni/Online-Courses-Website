import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './Components/Home/Courses/Courses';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
   return (
      <div className="App">
         <Router>
            <Header></Header>
            <Switch>
               <Route exact path="/">
                  <Home></Home>
               </Route>
               <Route exact path="/home">
                  <Home></Home>
               </Route>
               <Route path="/courses">
                  <Courses></Courses>
               </Route>
               <Route path="/about">
                  <AboutUs></AboutUs>
               </Route>
            </Switch>
            <Footer></Footer>
         </Router>
      </div>
   );
}

export default App;
