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
      <div>{`${address}|${rentalCompany}|${description}`}</div>
      <div>{`${type}|${make}|${id}|${accessories[1]}`}</div>
      <button>Rental car</button>
    </div>
  );
}

export default Modal;
