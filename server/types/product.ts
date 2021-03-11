import Category from "./category";
export default interface Product {
    id: number;
    name: string;
    price: number;
    title: string;
    details: string;
    img: string;
    categories: Category[];
    available: boolean;
    published: Date;
    createdAt: Date;
    updatedAt: Date;
}