import React from 'react';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import Header from '../../app/products/presentation/components/Header';
import { TitleCard } from '../../app/products/presentation/components/TitleCard';
import ProductsPage from '../../app/products/presentation/pages/ProductsPage';
import { fetchProductService } from '../../app/products/application/fetchProductService';
import { ProductMapper } from '../../app/products/infrastructure/product.mapper';
import { product } from '../../app/products/domain/product';

type Props = {
    data: product[];
    type: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { type: 'coffees' } },
            { params: { type: 'teas' } }
        ],
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const type = context.params.type as string;
    const data = await fetchProductService(type);
    return {
        props: {
            data, type,
        },
    };
};

export default function Products({ data, type }: Props): JSX.Element {
    const domainData = data.map(ProductMapper.toDomain);
    return (
        <>
            <Header type={type}/>
            <div className="mx-6 my-10 tablet:mx-40">
                <TitleCard type={type} />
            </div>
            <div className="flex flex-row justify-center items-center mx-0 tablet:mx-40">
                <ProductsPage data={domainData}/>
            </div>
            <div className="w-screen my-10 flex flex-row justify-center items-center text-center"><p>Made with</p><p className="mx-2"><Image src="/images/love.png" width={36} height={17} alt="love" /></p></div>
        </>
    );
}
