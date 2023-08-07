import { useState} from "react";

import ProductApiService from "../services/ProductApiService";

import { ProductModel } from "../../models/ProductModel";

const useProducts = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [newError, setNewError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    async function fetchProducts() {
        try {
          const response = await new ProductApiService().fetchProductApi();
          setProducts(response.data)
          setLoading(false);
        } catch (error) {
          setNewError("Something went wrong!")
          console.log(newError)
        }
      }

    return(
        {
            products,
            loading,
            fetchProducts
        }
    )
}

export default useProducts;