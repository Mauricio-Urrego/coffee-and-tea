import { product } from '../domain/product';

export async function fetchProductService(type?: string | string[]): Promise<product[]> {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}${type}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
