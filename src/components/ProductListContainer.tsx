import React, {FC, memo, useState, useEffect} from 'react';

import ProductApiService from './services/ProductApiService';

import { ProductModel } from '../models/ProductModel';

const ProductListContainer: FC = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        const productService = new ProductApiService();
        productService.fetchProductApi()
          .then(response => {
            const products = response.data;
            // Обработка полученных данных
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    return (

    )
}

export default memo(ProductListContainer)