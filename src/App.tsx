import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Built from './pages/Built/Built';
import './App.css';
import { useState } from 'react';
import Hero from './pages/Hero/Hero';
import Order from './pages/Order/Oreder';
import Complete from './pages/Complete/Complete';

import { initializeApp } from 'firebase/app';
import { config } from './firebase';
import Login from './pages/Account/Login';
import Logout from './pages/Account/Logout';
import SignUp from './pages/Account/SignUp';

export const Firebase = initializeApp(config.firebaseConfig);

export interface ItemTypeInfo{
  id: number;
  price: number;
  item: string;
  image: any;
  add: boolean;
}

function App() {

  const [ cartItems, setCartItems ] = useState([] as ItemTypeInfo[])

  const handleAddToOrder = (clickedItem: ItemTypeInfo) => {
    setCartItems(prev => {
      const isItemInOrder = prev.find(item => item.id === clickedItem.id);

      if(isItemInOrder){
        return prev.map(item => item.id === clickedItem.id ? {
          ...item,
        } : item)
      };
      return [...prev, {...clickedItem}];
    })
    console.log(cartItems)
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/built' element={<Built handleAddToOrder={handleAddToOrder}/>}/>
          <Route path='/order' element={<Order cartItems={cartItems}/>}/>
          <Route path='/complete' element={<Complete/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
