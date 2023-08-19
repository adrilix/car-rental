import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFindForm } from 'redux/carsSlice';
// import PropTypes from 'prop-types'

export const Form = ({ brandToFind, coastToFind, mileageFromToFind, mileageToToFind, handleSubmit }) => {
    const formData = useSelector(state => state.cars.formData)
    const filteredCars = useSelector(state => state.cars.filteredCars)



    const carBrandInputId = nanoid();
    const PriceHourInputId = nanoid();
    const CarMileageFromInputId = nanoid();
    const CarMileageToInputId = nanoid();
    const dispatch=useDispatch();

    const [make, setMake] = useState('');
    const [rentalPrice, setRentalPrice] = useState('');
    const [mileageFrom, setMileageFrom] = useState([]);
    const [mileageTo, setMileageTo] = useState([]);

    const newDataForm = {make, rentalPrice, mileageFrom, mileageTo};

    const handleChangeMake = evt => {
        setMake(evt.currentTarget.value);
    };

    const handResetForm = () => {
        setMake('');
        setRentalPrice('');
        setMileageFrom('');
        setMileageTo('');
        dispatch(resetFindForm(''))

    }

    const handleChangePrice = evt => {
        setRentalPrice(evt.currentTarget.value);
    };

    const handleChangeMileageFrom = evt => {
        setMileageFrom(evt.currentTarget.value);
    };

    const handleChangeMileageTo = evt => {
        setMileageTo(evt.currentTarget.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        handleSubmit(newDataForm)
    }
    
    return (
        <form autoComplete="off"onSubmit={onSubmit}>
            <label>
                CarBrand
                <input
                    onChange={handleChangeMake}                    
                    type="text"
                    name="carBrand"
                    id={carBrandInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Citroen, BMW, LuAZ"
                    value={make}
                    required
                />
            </label>
            <label>
                Price/1 hour
                <input
                onChange={handleChangePrice}
                    autoComplete="clear on escape"
                    type="text"
                    name="Price/1 hour"
                    id={PriceHourInputId}
                    value={rentalPrice}
                    required
                />
            </label>
            <label>
                Car mileage / km from
                <input
                    onChange={handleChangeMileageFrom}
                    autoComplete="clear on escape"
                    type="text"
                    name="Car mileage / km from"
                    id={CarMileageFromInputId}
                    pattern="[0-9]*"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Citroen, BMW, LuAZ"
                    value={mileageFrom}
                    required
                />
            </label>
            <label>
            Car mileage / km to
                <input
                    onChange={handleChangeMileageTo}
                    autoComplete="clear on escape"
                    type="text"
                    name="Car mileage / km to"
                    id={CarMileageToInputId}
                    pattern="[0-9]*"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Citroen, BMW, LuAZ"
                    value={mileageTo}
                    required
                />
            </label>
            <button type="submit">Search</button>
            {formData && formData!==''
            &&<button type="button" onClick={handResetForm}>clear dataForm</button>
            }
            {formData!==''&&filteredCars.length===0
            && alert("❓no cars at your request. Please specify your request☝")
            }

        </form>
    );
};

// Form.propTypes = {

// }

export default Form;
