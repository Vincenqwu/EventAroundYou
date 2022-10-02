import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import FutureEvent from './pages/FutureEvent';
import PastEvent from './pages/PastEvent';
import UserPage from './pages/UserPage';
import EventDetail from './pages/EventDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './pages/Signin';

function App() {
  return (
    <div className='App'>
      {/* <AppRouter/> */}
      {/* <Home/> */}
      {/* <FutureEvent/> */}
      <SignIn/>
      {/* <PastEvent/> */}
    </div>
  );
}

// function AppRouter() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/event" element={<EventDetail/>}
//       <Route path="/past" element={<PastEvent/>}/>
//       <Route path='/future' element={<FutureEvent/>}
//       <Route path='user' element={<UserPage/>}
//       <Route path="*" element={<p>This page isn't available. Sorry about that. </p>} />
//     </Routes>
//   );
// }


export default App;
