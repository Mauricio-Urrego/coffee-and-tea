import React from 'react';
import Image from 'next/image';

type Props = {
    title: string;
    imageUrl: string;
    type?: string;
};

export const ProductCard: React.FC<Props> = ({ imageUrl, title, type }) => {
    return (
        <div className="product-card font-montserrat">
            <div className="product-image">
                <div className="my-2 mx-4">
                    <Image blurDataURL='/images/1.png' placeholder="blur" src={imageUrl} width={248} height={248} alt={title} />
                </div>
            </div>
            <div className="product-info flex flex-row mx-4">
                <h2 className="product-title">{title}</h2>
                <div className={`product-type ${type ? type.toLowerCase() : undefined}`}>
                    {type ? type.toUpperCase() : undefined}
                </div>
            </div>
            <style jsx>{`
        .product-card {
          background-color: white;
          display: flex;
          flex-direction: column;
          width: 264px;
        }
        .product-image {
          width: 248px;
          height: 248px;
        }
        .product-info {
          border-top: 1px solid #F1E7CD;
          border-style: thin;
        }
        .product-title {
          margin-top: 9px;
          margin-bottom: 16px;
        }
        .product-type {
          font-size: 13px;
          font-weight: 600;
          color: white;
          height: 24px;
          width: 82px;
          padding-top: 4px;
          padding-bottom: 4px;
          padding-right: 8px;
          padding-left: 8px;
          margin-left: 10px;
          margin-top: 8px;
        }
        .product-type.arabic {
          background-color: #CD4C15;
        }
        .product-type.robusta {
          background-color: #758266;
        }
      `}</style>
        </div>
    );
};
