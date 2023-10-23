import CarsList from 'components/CarsList/CarsList';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCarToFavorite,
  nextPage,
  removeCarOnFavorite,
} from 'redux/carsSlice';
import { getCarsThunk } from 'redux/carsThunk';

const FavoriteCarsPage = () => {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.cars.formData);
  const loading = useSelector(state => state.cars.loading);
  const favoriteCars = useSelector(state => state.cars.favorite);
  const filteredCars = useSelector(state => state.cars.filteredCars);
  const currentPage = useSelector(state => state.cars.currentPage);
  const perPage = useSelector(state => state.cars.perPage);

  useEffect(() => {
    // if (!favoriteCars && favoriteCars.length === 0) return;
    dispatch(getCarsThunk());
  }, [dispatch]);

  const lastCarCurrentPageIndex = perPage * currentPage;
  const firstCarCurrentPageIndex = 0;
  const currentCarsOnPage = favoriteCars.slice(
    firstCarCurrentPageIndex,
    lastCarCurrentPageIndex
  );
  const currentFilteredCarsOnPage = filteredCars.slice(
    firstCarCurrentPageIndex,
    lastCarCurrentPageIndex
  );
  const handleClickLoadMore = () => {
    dispatch(nextPage(currentPage + 1));
    console.log('load more just now');
  };

  const handleFavorite = car => {
    dispatch(addCarToFavorite(car));
    console.log('add to favorite', car);
  };
  const handleRemoveFavorite = id => {
    console.log('id: ', id);

    dispatch(removeCarOnFavorite(id));
    console.log('remove on favorite', id);
  };
  const handleLearnMoreClick = () => {
    console.log('click - відкриття модалки');
  };

  const favoriteIds = favoriteCars.reduce((allId, car) => {
    allId.push(car.id);
    return allId;
  }, []);

  return (
    <>
      <div>
        {filteredCars.length === 0 && formData === '' ? (
          <CarsList
            cars={currentCarsOnPage}
            loading={loading}
            handleLearnMoreClick={handleLearnMoreClick}
            handleFavorite={handleFavorite}
            handleRemoveFavorite={handleRemoveFavorite}
            favoriteIds={favoriteIds}
          />
        ) : (
          <CarsList
            cars={currentFilteredCarsOnPage}
            loading={loading}
            handleLearnMoreClick={handleLearnMoreClick}
            handleFavorite={handleFavorite}
            handleRemoveFavorite={handleRemoveFavorite}
            favoriteIds={favoriteIds}
          />
        )}
      </div>
      {filteredCars.length === 0 && formData === '' ? (
        favoriteCars.length > currentCarsOnPage.length ? (
          <button type="button" onClick={handleClickLoadMore}>
            Load more
          </button>
        ) : (
          <>
            <button disabled>Load more</button>
            <p>this is all cars to review</p>
          </>
        )
      ) : filteredCars.length > currentCarsOnPage.length ? (
        <button type="button" onClick={handleClickLoadMore}>
          Load more
        </button>
      ) : (
        <>
          <button disabled>Load more</button>
          <p>this is all cars to review</p>
        </>
      )}
    </>
  );
};

export default FavoriteCarsPage;
