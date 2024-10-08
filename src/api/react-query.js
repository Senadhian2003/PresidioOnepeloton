import { useQuery } from '@tanstack/react-query';
import { getShoppingItems, getCarouselItems } from './axios';

export const useGetShoppingItems = () => {
    return useQuery({
      queryFn: async () => {
        try {
          const data = await getShoppingItems();
          return data;
        } catch (err) {
          console.log({ err });
          throw new Error(err.response.data);
        }
      },
      queryKey: ['getShoppingItems'],
    });
  };

  export const useGetCarouselItems = () => {
    return useQuery({
      queryFn: async () => {
        try {
          const data = await getCarouselItems();
          return data;
        } catch (err) {
          console.log({ err });
          throw new Error(err.response.data);
        }
      },
      queryKey: ['getCarouselItems'],
    });
  };