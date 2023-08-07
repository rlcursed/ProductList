import React, {FC, memo, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import ProductCard from './ProductCard';

import { AppDispatch } from './store/store';

import { fetchProducts } from './store/product/ProductSlice';

import { GridContainer} from './Styles';
import { ProductModel } from '../models/ProductModel';
import CreateButton from './CreateButton';


const ProductListContainer: FC = () => {

  const {list} = useSelector(({products}) => products);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(fetchProducts())
    }, [dispatch]);

    const test = () => {
      console.log(1)
    }

    return (
      <div>
      <CreateButton onClick={test} title='Create Product'></CreateButton>

      <GridContainer>
        {
          list.map((item: ProductModel) => {
            return <ProductCard 
            key={item.id}
            {...item}
            />
          })
        }
      </GridContainer>
      </div>
    )
}

export default memo(ProductListContainer)