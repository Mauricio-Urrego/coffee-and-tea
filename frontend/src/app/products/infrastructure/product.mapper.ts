import { product } from '../domain/product';

interface ProductData {
    id: number;
    title: string;
    imageUrl?: string;
    type?: string;
}

export const ProductMapper = {
    toDomain: (data: ProductData): product => {
      const { id, title, imageUrl = '', type = '' } = data;
      return new product({ id, title, imageUrl, type });
  },
};
