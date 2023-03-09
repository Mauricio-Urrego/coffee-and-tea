import { product } from '../domain/product';
const API_BASE_URL = process.env.API_BASE_URL || 'https://example.com/api';

export async function fetchProductService(type?: string | string[]): Promise<product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}${type}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
