import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
    _id: string;
    image: string | StaticImport;
    name: string;              
    description: string;        
    imageUrl: string;           
    price: number;              
    discountPercentage?: number;
    priceWithoutDiscount: number;
    rating: number;             
    ratingCount: number;        
    tags: string[];             
    badge: string;              
    slug: string;   
    inventory: number ;
    id:number           
  }