import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [perPage] = useState(8);

  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      const response = await axios.get(
        'https://64c50509c853c26efada6457.mockapi.io/contacts/adverts'
      );
      setCars(response.data);
      setLoading(false);
      setCurrentPage(1);
    };

    getCars();
  }, []);
  console.log('cars: ', cars);
  console.log('loading: ', loading);

  console.log('currentPage: ', currentPage);
  console.log('perPage: ', perPage);
  return <div></div>;
};

export default CatalogPage;
