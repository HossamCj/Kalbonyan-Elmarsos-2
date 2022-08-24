import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/home/navigation/navigation.component'
import SignIn from './routes/sign-in/sing-in.component'
import Home from './routes/home/home.component'



const Shop = () => {
  return (
    <h1>I'm the shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  ) 
}

export default App