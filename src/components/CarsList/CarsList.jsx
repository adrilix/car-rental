import React from 'react'
import PropTypes from 'prop-types'
import { LoaderSpinner } from 'components/Loader/Loader'
import CarItem from 'components/CarItem/CarItem'

export const CarsList = ({ cars, loading, handleLearnMoreClick,handleFavorite,favoriteIds,handleRemoveFavorite}) => {

    if (loading) {
        return (
        <>
            <h2>loading...</h2>
            <LoaderSpinner />
        </>
        )
    }
  return (
    <div>
        <ul>
            {cars.map(car =>(
                <CarItem key={car.id}
                    car={car} handleLearnMoreClick={handleLearnMoreClick} handleFavorite={handleFavorite} favoriteIds={favoriteIds} handleRemoveFavorite={handleRemoveFavorite}
                />
            ))}
        </ul>
    </div>
  )
}

CarsList.propTypes = {
  cars: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  handleLearnMoreClick: PropTypes.func.isRequired,
}

export default CarsList;