import './App.css';

import RE_Search from './Presentation/Pages/Display/Pages/RE-Search';
import ShowHouse from './Presentation/Pages/ShowPages/Page/show_house';
import HomePage from './Presentation/Pages/Home/Pages/HomePage';
import Login_page from './Presentation/Pages/Auth/Auth_page';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './Presentation/Pages/Profile/profile_page';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/Properties' element={<RE_Search/>}></Route>
        <Route path='/Details' element={<ShowHouse/>}></Route>
        <Route path='/Profile' element={<ProfilePage/>}></Route>        
      </Routes>
    </Router>
    </>
  )
}

export default App
