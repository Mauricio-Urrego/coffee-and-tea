import React from 'react';
import { product } from '../../domain/product';
import { ProductCard } from '../components/ProductCard';

type Props = {
    data: product[];
}

export const ProductsPage: React.FC<Props> = ({ data }) => {
    return (
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 xsLaptop:grid-cols-3 smLaptop:grid-cols-4">
            {data.map((product: product) => (
                <ProductCard key={product.id} title={product.title} imageUrl={product.imageUrl}
                             type={product.type}/>
            ))}
        </div>
    );
}

export default ProductsPage;
