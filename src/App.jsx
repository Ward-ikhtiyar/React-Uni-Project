import './App.css';

import ShowHouse from './Presentation/Pages/ShowPages/Page/show_house';
import HomePage from './Presentation/Pages/Home/Pages/HomePage';
import Login_page from './Presentation/Pages/Auth/Auth_page';
function App() {
  

  return (
    <>
    <div className='property-card'>
      
      <div className='property-pic'>
      </div>
      <div className='price-favorite'>2,300$
      </div>
      <div className='info'>4 beds<hr></hr>2 ba<hr></hr>1,535 sqft <hr></hr> House for sale
      </div>
      <div className='info'>Damascus,Qudsaya
      </div>
    </div>
    {/* <HomePage/> */}
      {/* <ShowHouse/> */}
    </>
  )
}

export default App
