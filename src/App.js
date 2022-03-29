import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';

function App() {
   return (
      <div className="App">
         <Header></Header>
         <Home></Home>
         <Footer></Footer>
      </div>
   );
}

export default App;
