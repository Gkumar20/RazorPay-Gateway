import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import PaymentSuccess from './PaymentSuccess'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/paymentsuccess/:orderId"  element={<PaymentSuccess/>}/>
      </Routes>
    </Router>
  )
}

export default App