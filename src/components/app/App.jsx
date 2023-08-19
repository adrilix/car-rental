
import React, { Suspense, lazy } from 'react'
import {Route, Routes, useLocation } from 'react-router-dom';

import { LoaderSpinner } from 'components/Loader/Loader'
import { NavLink } from 'react-router-dom/dist';
import { StyledLink } from './AppStyled';
import Form from 'components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';

import {setFindCarsInCatalog} from 'redux/carsSlice';

const HomePage = lazy(() => import('../../Page/Home/HomePage'));
const CatalogPage = lazy(() => import('../../Page/CatalogCars/CatalogPage'));
const FavoriteCarsPage = lazy(() => import('../../Page/FavoriteCars/FavoriteCarsPage'));

function App() {

  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = ({make, rentalPrice, mileageFrom, mileageTo}) =>{
    const dataToFindCars = {
      make,
      rentalPrice,
      mileageFrom,
      mileageTo ,
    };
    dispatch(setFindCarsInCatalog(dataToFindCars));
}
    const favoriteCars = useSelector(state=>state.cars.favorite);

  return (

    <div>
      <header>
        <NavLink to="/catalog">Carsharing</NavLink>
          <div >
            <a href="index.html">
            </a>
          </div>
        <nav>
          <StyledLink to="/">home</StyledLink> 
          {favoriteCars.length > 0 ? (
            <>
                <StyledLink to="/catalog">set car</StyledLink>
                <StyledLink to="/favorites">Favorite cars</StyledLink>
            </>
          ) : (
            <>
              <NavLink to="/catalog">set car</NavLink>
            </>
          )}
        </nav>
        {location.pathname!=="/" &&
         <Form handleSubmit={handleSubmit}></Form>}
        
      </header>
      <main>
      <Suspense fallback={<LoaderSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoriteCarsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}

export default App;
