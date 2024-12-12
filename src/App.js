import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './components/home';
import Details from './components/Details';
import Message1 from './components/Message1';
import Message2 from './components/Message2';
import Message3 from './components/Message3';
import Product from './components/Product';
import Users from './components/Users';
import Photos from './components/Photos';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Notfound from './components/Notfound';
import UserDetails from './components/UserDetailes';
import NewUser from './components/NewUser';
import Login from './components/Login';
function App() {
  let name = 'Lital Gehman';
  let age = 22; 
 let animalImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1nkrYXY-ijQv5aCxkwooyg2roNFxj0ewJA&s"
  
 let developerName = 'Lital Gehman';
 return (
    <div className="App">
        <Router>
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home userName = {name}/>} />
          <Route path="/product" element={ <Product />} />
        <Route path="/users" >
        <Route index element={< Users />} />
        <Route path=":id" element={<UserDetails />} />

        </Route>
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/login" element={<Login />} />

          <Route path="*" element={< Notfound />} />

        
          </Routes>

        </Router>

     
        {/* <h1 style= {{color: "yellow" , fontSize: "44px"}}> hello {name} {age} </h1> */}
        {/* <Message1 isAdmin={false}/> */}
        {/* <Message2 isAdmin={false}/> */}
        {/* <Message3 isAdmin={true} /> */}
        {/* <Details /> */}
        {/* <img className='cappyImg' src={animalImage} alt="cappy" /> */}
        
        {/* <Photos /> */}
      <Footer developer = {developerName} />
    </div>
  );
}

export default App;
