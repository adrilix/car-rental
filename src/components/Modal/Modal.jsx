import React from 'react';

function Modal(active, setActive, car) {
  const {
    img,
    make,
    model,
    // ,year,rentalPrice,address,rentalCompany,description,type,id,accessories
  } = car;
  return (
    <div>
      <svg />
      <img src={img} alt={`Car to rent ${make} ${model}`} />
      <button>Try call</button>
    </div>
  );
}

export default Modal;
