import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import UserProfile from './Components/UserAccount/UserInformation/UserProfile/UserProfile';
import Wallet from './Components/UserAccount/UserInformation/Wallet/Wallet';
import Order from './Components/UserAccount/UserInformation/Order/Order';
import OrderHistory from './Components/UserAccount/UserInformation/OrderHistory/OrderHistory';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/userWallet' element={<Wallet />} />
          <Route path='/userOrder' element={<Order />} />
          <Route path='/orderHistory' element={<OrderHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
