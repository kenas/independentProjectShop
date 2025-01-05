import Root from '../Root/Root';
import NavBar from '../Header/Header';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content  from '../Content/Content';
import { pictures } from '../../DataSet/DataSet';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProductCategory from '../ProductCategory/ProductCategory';

//Import Route
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

//Css
import '../../index.css';

function App() {

  const router = createBrowserRouter(createRoutesFromElements([
    <Route path='/'  element={<Root />}>

      {/*I want the header picture for carusoul when on the landing page and when the user click on home is well. 
      In order to get the pictures to the header I need to pass the pictures prosp 
      into Header and Content component where also is Header Component*/}
      <Route path='/'  element={<Header pictures={pictures}/>} />

      {/*I have to make sure the Contnet componnet is load for first land page and when the user click Home*/}
      <Route index path='/'  element={<Content pictures={pictures}/>} />
      <Route path='/home'  element={<Content pictures={pictures}/>} />

      <Route path='/category/'  element={<ProductCategory />}/>
      <Route path='/category/:cat'  element={<ProductCategory />}/>
      <Route path='*' element={<PageNotFound />}/>
    </Route>

  ]));


  return (
    <>
   
      <RouterProvider router={router}/>
      <Footer />
      </>

  )
}

export default App
