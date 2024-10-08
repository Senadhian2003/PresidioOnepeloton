import axios from 'axios';

export const getShoppingItems = async () => {
  return axios.get(`http://localhost:8000/getShoppingItems`);
};

export const getCarouselItems = async () => {
  return axios.get(`http://localhost:8000/getCarouselItems`);
};

