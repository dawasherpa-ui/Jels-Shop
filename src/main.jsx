import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='bg-[#F7F2E8] scroll-smooth '>
   <Home></Home>
   </div>
  </React.StrictMode>,
)
