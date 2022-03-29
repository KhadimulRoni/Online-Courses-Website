import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './Components/Home/Courses/Courses';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import Details from './Components/Home/CourseDetails/Details';

function App() {
   return (
      <div className="App">
         <AuthProvider>
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
                  <PrivateRoute path="/details/:id">
                     <Details></Details>
                  </PrivateRoute>
                  <Route path="/login">
                     <Login></Login>
                  </Route>
                  <Route path="/registration">
                     <Registration></Registration>
                  </Route>
                  <Route path="*">
                     <NotFound></NotFound>
                  </Route>
               </Switch>
               <Footer></Footer>
            </Router>
         </AuthProvider>
      </div>
   );
}

export default App;
