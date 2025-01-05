import NavBar from '../Header/Header';
import Root from '../Root/Root';
import Content  from '../Content/Content';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProductCategory from '../ProductCategory/ProductCategory';

//Import Route
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

//Css
import '../../index.css';

function App() {

  const router = createBrowserRouter(createRoutesFromElements([
    <Route path='/'  element={<Root />}>
      <Route  path='/'  element={<Header />} />
      <Route index path='/'  element={<Content />} />
      <Route  path='/home'  element={<Content />} />
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
