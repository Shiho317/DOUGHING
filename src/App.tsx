import {
  BrowserRouter as Router,
  Routes,
  Route,
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
import SignUp from './pages/Account/SignUp';
import AuthRoute from './components/AuthRoute';

import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


export const Firebase = initializeApp(config.firebaseConfig);
const db = getFirestore(Firebase);

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

  const handleRemoveFromOrder = (id: number) => {
    setCartItems(prev => (
      prev.filter(item => item.id !== id)
    ))
    console.log(cartItems)
  };

  const auth = getAuth();
  let userUid: string = '';

  onAuthStateChanged(auth, (user) => {
    if(user){
      const uid = user.uid;
      userUid = uid;
    }else{
      console.log('no user')
    }
  })

  const addToFireStore = async() => {

    const addedData = await addDoc(collection(db, userUid), {
      pizza: {
        ingredients: cartItems.map(item => {
          return item
        })
      }
    }) 
    console.log("Document written with ID: ", addedData.id);
  }

  const [ isCount, setIsCount ] = useState<number>(0);

  const isCountAdd = () => {
    setIsCount(isCount + 1);
  };

  const isCountReset = () => {
    setIsCount(0);
  };

  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' 
            element={<Hero isCount={isCount}/>} />
          <Route path='/built' 
            element={<AuthRoute>
            <Built 
              handleAddToOrder={handleAddToOrder} 
              handleRemoveFromOrder={handleRemoveFromOrder}
              addToFireStore={addToFireStore}
              isCount={isCount}
              isCountAdd={isCountAdd}
              />
            </AuthRoute>}/>
          <Route path='/order' 
            element={<AuthRoute>
            <Order 
              cartItems={cartItems} 
              isCount={isCount} 
              isCountReset={isCountReset}/>
            </AuthRoute>}/>
          <Route path='/complete' 
            element={<AuthRoute>
              <Complete/>
            </AuthRoute>}/>
          <Route path='/login' 
            element={<Login isCount={isCount}/>}/>
          <Route path='/signup' 
            element={<SignUp isCount={isCount}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
