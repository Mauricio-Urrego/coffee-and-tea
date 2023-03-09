import { ProductMapper } from './product.mapper';
import { product } from '../domain/product';

describe('ProductMapper', () => {
  describe('toDomain', () => {
    it('should return a product object with the correct properties', () => {
      // Arrange
      const productData = {
        id: 1,
        title: 'Test Product',
        imageUrl: 'http://example.com/image.jpg',
        type: 'test',
      };

      // Act
      const result = ProductMapper.toDomain(productData);

      // Assert
      expect(result).toBeInstanceOf(product);
      expect(result.id).toEqual(productData.id);
      expect(result.title).toEqual(productData.title);
      expect(result.imageUrl).toEqual(productData.imageUrl);
      expect(result.type).toEqual(productData.type);
    });

    it('should return a product object with default imageUrl and type if not provided', () => {
      // Arrange
      const productData = {
        id: 1,
        title: 'Test Product',
      };

      // Act
      const result = ProductMapper.toDomain(productData);

      // Assert
      expect(result).toBeInstanceOf(product);
      expect(result.id).toEqual(productData.id);
      expect(result.title).toEqual(productData.title);
      expect(result.imageUrl).toEqual('');
      expect(result.type).toEqual('');
    });

    it('should ignore extra fields in product data', () => {
      // Arrange
      const productData = {
        id: 1,
        title: 'Test Product',
        imageUrl: 'http://example.com/image.jpg',
        type: 'test',
        extraField: 'should be ignored',
      };

      // Act
      const result = ProductMapper.toDomain(productData);

      // Assert
      expect(result).toBeInstanceOf(product);
      expect(result.id).toEqual(productData.id);
      expect(result.title).toEqual(productData.title);
      expect(result.imageUrl).toEqual(productData.imageUrl);
      expect(result.type).toEqual(productData.type);
    });
  });
});
