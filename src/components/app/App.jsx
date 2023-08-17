
import React, { Suspense, lazy } from 'react'
import {Route, Routes } from 'react-router-dom';

import { LoaderSpinner } from 'components/Loader/Loader'
import { NavLink } from 'react-router-dom/dist';
import { StyledLink } from './AppStyled';
import Form from 'components/Form/Form';

const HomePage = lazy(() => import('../../Page/Home/HomePage'));
const CatalogPage = lazy(() => import('../../Page/CatalogCars/CatalogPage'));
const FavoriteCarsPage = lazy(() => import('../../Page/FavoriteCars/FavoriteCarsPage'));

function app() {
    const userData = {};
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
          {userData ? (
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
        <Form></Form>
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
