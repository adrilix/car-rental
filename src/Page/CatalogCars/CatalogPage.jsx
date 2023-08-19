import React, { useEffect } from 'react';
import CarsList from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/carsThunk';
import { addCarToFavorite, nextPage } from 'redux/carsSlice';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.cars.formData);
    const loading = useSelector(state => state.cars.loading);
    const cars = useSelector(state => state.cars.cars);
    const filteredCars = useSelector(state => state.cars.filteredCars);
    const currentPage = useSelector(state => state.cars.currentPage);
    const perPage = useSelector(state => state.cars.perPage);
    // const favoriteCars = useSelector(state => state.cars.favorite);

    // const favoriteId = favoriteCars => 
    //     favoriteCars.reduce((allId,id)=>{
    //         allId.push(id);
    //         return allId;
    //     },[]);
    // console.log(favoriteId());  
    
    

    useEffect(() => {
        if (cars && cars.length > 0) return;
        dispatch(getCarsThunk());
    }, [cars, dispatch]);

    const lastCarCurrentPageIndex = perPage * currentPage;
    const firstCarCurrentPageIndex = 0;
    const currentCarsOnPage = cars.slice(
        firstCarCurrentPageIndex,
        lastCarCurrentPageIndex
    );
    const currentFilteredCarsOnPage = filteredCars.slice(
        firstCarCurrentPageIndex,
        lastCarCurrentPageIndex
    );
    console.log('currentCarsOnPage: ', currentCarsOnPage);

    const handleClickLoadMore = () => {
        dispatch(nextPage(currentPage + 1));
        console.log('load more');
    };

    const handleFavorite = (car) => {
        console.log('car: ', car);

        dispatch(addCarToFavorite(car));
        console.log('add to favorite', car);
    }

    const handleLearnMoreClick = () => {
        console.log('click для відкриття модалки');
    };

    return (
        <>
            <div>
                {filteredCars.length===0 && formData==='' ? (
                    <CarsList
                        cars={currentCarsOnPage}
                        loading={loading}
                        handleLearnMoreClick={handleLearnMoreClick}
                        handleFavorite={handleFavorite}
                    />
                ) : (
                    <CarsList
                        cars={currentFilteredCarsOnPage}
                        loading={loading}
                        handleLearnMoreClick={handleLearnMoreClick}
                        handleFavorite={handleFavorite}
                    />
                )}
            </div>
            {filteredCars.length === 0 && formData==='' ? (
                cars.length > currentCarsOnPage.length ? (
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

export default CatalogPage;
