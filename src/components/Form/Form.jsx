import { nanoid } from '@reduxjs/toolkit';
// import PropTypes from 'prop-types'
import React from 'react';

export const Form = ({ brandToFind, coastToFind, mileageFromToFind, mileageToToFind, handleSubmit }) => {
    const carBrandInputId = nanoid();
    const PriceHourInputId = nanoid();
    const CarMileageFromInputId = nanoid();
    const CarMileageToInputId = nanoid();


    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                CarBrand
                <input
                    autoComplete="clear on escape"
                    type="text"
                    name="carBrand"
                    id={carBrandInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Citroen, BMW, LuAZ"
                    value={brandToFind}
                    required
                />
            </label>
            <label>
                Price/1 hour
                <input
                    autoComplete="clear on escape"
                    type="text"
                    name="Price/1 hour"
                    id={PriceHourInputId}
                    pattern="[0-9]*"
                    title="number must be digits and cant contain spaces, dashes, parentheses and cant start with"
                    value={coastToFind}
                    required
                />
            </label>
            <label>
                Car mileage / km from
                <input
                    autoComplete="clear on escape"
                    type="text"
                    name="Car mileage / km from"
                    id={CarMileageFromInputId}
                    pattern="[0-9]*"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Citroen, BMW, LuAZ"
                    value={mileageFromToFind}
                    required
                />
            </label>
            <label>
            Car mileage / km to
                <input
                    autoComplete="clear on escape"
                    type="text"
                    name="Car mileage / km to"
                    id={CarMileageToInputId}
                    pattern="[0-9]*"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Citroen, BMW, LuAZ"
                    value={mileageToToFind}
                    required
                />
            </label>
            <button type="submit">Search</button>
        </form>
    );
};

// Form.propTypes = {

// }

export default Form;
