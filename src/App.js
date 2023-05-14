import {Routes, Route} from 'react-router-dom'
import Navigation from './routers/navigation/navigation.components';
import Home from "./routers/home/home.components";
import SignIn from './routers/sign-in/sign-in.components';


const Shop = () => {
  return <h1>Shop page</h1>
}

const App = () =>  {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  
  )

}

export default App;
