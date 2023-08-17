import React, { useEffect } from 'react';
import CarsList from 'components/CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/carsThunk';
import { nextPage } from 'redux/carsSlice';

const CatalogPage = () => {
    const dispatch = useDispatch()
    // const error = useSelector(state => state.cars.error);
    const loading = useSelector(state => state.cars.loading);
    const cars = useSelector(state => state.cars.cars);
    const currentPage = useSelector(state => state.cars.currentPage);
    const perPage = useSelector(state => state.cars.perPage);

    useEffect(() => {
        // if (cars && cars.length > 0) return;
        dispatch(getCarsThunk());
    }, [dispatch]);
    const lastCarCurrentPageIndex = perPage * currentPage;
    const firstCarCurrentPageIndex = 0;
    const currentCarsOnPage = cars.slice(firstCarCurrentPageIndex, lastCarCurrentPageIndex);
    console.log('currentCarsOnPage: ', currentCarsOnPage);

    const handleClickLoadMore = () => {
        dispatch(nextPage(currentPage + 1));
        console.log("load more");
    }
    const handleLearnMoreClick = () => {
        console.log("click для відкриття модалки");
    }

    return (
        <>
            <div>
                <CarsList cars={currentCarsOnPage} loading={loading} handleLearnMoreClick={handleLearnMoreClick} />
            </div>
            {cars.length > currentCarsOnPage.length ? (
            <button type="button" onClick={handleClickLoadMore}>Load more</button>
            )
                : (
                    <>
                        <button disabled>Load more</button>
                        <p>this is all cars to review</p>
                    </>
                )
            }

        </>
    );
};

export default CatalogPage;
