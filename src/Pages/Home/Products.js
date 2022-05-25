import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-12 container mx-auto'>
            <h2 className='text-primary text-3xl text-center font-bold mb-8'>Medical Tools</h2>
            <div className='justify-center gap-5 grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;