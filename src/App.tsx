import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Built from './pages/Built/Built';
import './App.css';
import Hero from './pages/Hero/Hero';
import Order from './pages/Order/Oreder';
import Complete from './pages/Complete/Complete';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/built' element={<Built/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/complete' element={<Complete/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
