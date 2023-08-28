import React from 'react';

function Modal(active, setActive, car) {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    description,
    type,
    id,
    accessories,
  } = car;
  const descrType = description => {
    if (description.includes('lux') || description.includes('premium')) {
      return 'Premium';
    } else return '';
  };
  return (
    <div>
      <svg />
      <img src={img} alt={`Car to rent ${make} ${model}`} />
      <div>
        <b>
          {make}
          <span>{model}</span>
          {year}
        </b>
        <b>{rentalPrice}</b>
      </div>
      <div>{`${address}|${rentalCompany}|${descrType(description)}`}</div>
      <div>{`${type}|${make}|${id}|${accessories[1]}`}</div>
      <button>Try call</button>
    </div>
  );
}

export default Modal;
