import axios from 'axios';

const localhost = 'http://localhost:8000'

export const getShoppingItems = async () => {
  return axios.get(`${localhost}/getShoppingItems`);
};

export const getCarouselItems = async () => {
  return axios.get(`${localhost}/getCarouselItems`);
};

