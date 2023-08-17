import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import Dropdown from '../Dropdown/Dropdown';

import { CategoryWrapper, customStyles } from './CategorySelectStyled';

const CategorySelect = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <CategoryWrapper>
      <Select
        styles={customStyles}
        components={{ Dropdown }}
        {...field}
        {...props}
      />
    </CategoryWrapper>
  );
};

export default CategorySelect;