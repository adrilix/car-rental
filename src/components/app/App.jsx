
import React, { Suspense, lazy } from 'react'
import {Route, Routes } from 'react-router-dom';

import { LoaderSpinner } from 'components/Loader/Loader'
import { NavLink } from 'react-router-dom/dist';

// import HomePage from 'Page/Home/Homepage';
// import CatalogPage from 'Page/CatalogCars/CatalogPage';
// import FavoriteCarsPage from 'Page/FavoriteCars/FavoriteCarsPage';

const HomePage = lazy(() => import('../../Page/Home/HomePage'));
const CatalogPage = lazy(() => import('../../Page/CatalogCars/CatalogPage'));
const FavoriteCarsPage = lazy(() => import('../../Page/FavoriteCars/FavoriteCarsPage'));

function app() {
    const userData = null;
  return (

    <div>
      <header>
        <NavLink to="/catalog">Carsharing</NavLink>
        <div >
            <a href="index.html">
            </a>
          </div>
      <nav>
          <NavLink to="/">home</NavLink>
          {userData ? (
            <>
                <NavLink to="/catalog">set car</NavLink>
                <NavLink to="/favorites">Favorite cars</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/catalog">set car</NavLink>
            </>
          )}
        </nav>
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

export default app
