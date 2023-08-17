import PropTypes from 'prop-types';
import React from 'react';

export const CarItem = ({car,handleLearnMoreClick}) => {
    const {img,make,model,year,rentalPrice,address,rentalCompany,description,type,id,accessories}=car;
    const descrType = (description)=>{
      if (description.includes('lux')||description.includes('premium')){
        return "Premium"
      } else return ''
    }
  


  return (
    <div width = {275}>
      <img alt={`${make} ${model} ${type}`} src={img} width={274}></img>
      <div>
        <b>{make}<span>{model}</span>{year}</b>
        <b>{rentalPrice}</b>
      </div>
      <div>
        {`${address}|${rentalCompany}|${descrType(description)}`}
      </div>
      <div>
        {`${type}|${make}|${id}|${accessories[1]}`}
      </div>
      <button type="button" onClick={handleLearnMoreClick}>Learn more</button>
    </div>
  );
};

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
  handleLearnMoreClick: PropTypes.func.isRequired,
};

export default CarItem;
