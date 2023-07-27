import axios, {AxiosResponse} from 'axios';

import { ProductModel } from '../../models/ProductModel';

import { PRODUCTS_URL } from '../constants/ApiConstants';

class ProductApiService {
    fetchProductApi(): Promise<AxiosResponse<ProductModel[]>> {
        return axios.get<ProductModel[]>(PRODUCTS_URL);
    }
}

export default ProductApiService;