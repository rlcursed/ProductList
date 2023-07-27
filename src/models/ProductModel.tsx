export interface ProductModel {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: Record<string, number>;
}