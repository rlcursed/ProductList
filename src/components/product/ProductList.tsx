import React, {FC, memo} from "react";
import { ProductModel } from "../../models/ProductModel";

interface ProductListProps {
    products: ProductModel[]
}

const ProductList: FC<ProductListProps> = ({products}) => {
    return(
        <div></div>
    )
}

export default memo(ProductList);