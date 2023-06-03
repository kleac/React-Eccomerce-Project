import {Routes, Route} from 'react-router-dom'
import Navigation from './routers/navigation/navigation.components';
import Home from "./routers/home/home.components";
import Authentication from './routers/authentication/authentication.components';


const Shop = () => {
  return <h1>Shop page</h1>
}

const App = () =>  {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  
  )

}

export default App;
