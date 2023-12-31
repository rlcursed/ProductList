import React, {memo, FC} from "react";
import { ProductModel } from "../models/ProductModel";
import Description from "./Description";

import { CardContainer, ResizeContainer, ImageDiv, ResizeTwoContainer } from "./Styles";

interface ProductCardProps extends ProductModel{

}

const ProductCard: FC<ProductCardProps> = ({title, price, description, image}) => {
    return (
        <CardContainer>
            <ResizeContainer>
                <ImageDiv src={image}/>
                {price + " $"}
            </ResizeContainer>
            <ResizeTwoContainer>
                {title}
            </ResizeTwoContainer>
            <ResizeTwoContainer>
                <Description
                text={description} />
            </ResizeTwoContainer>
        </CardContainer>
    )
}

export default memo(ProductCard);