import { Product } from "@/components/home/ourProducts";

export const addToCart = (product : Product) => {
   const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
   
   const existingProduct = cart.findIndex(item => item.id === product.id)

   if(existingProduct > -1){
      cart[existingProduct].
   }
}