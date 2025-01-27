import { Product } from "../types/product"


export const addToCart = (product : Product) => {
   const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
   
   const existingProduct = cart.findIndex(item => item.id === product.id)

   if(existingProduct > -1){
      cart[existingProduct].inventory += 1
   }
   else{
      cart.push({
         ...product, inventory:1
      })
   }
   localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) => {
let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

cart = cart.filter(item => item.id !== Number(productId)) 
localStorage.setItem('cart', JSON.stringify(cart))
}
export const undateCartQuantity = (productId : string, quantity : number) => {
   const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
   const productIndex = cart.findIndex((item => item._id === productId)
 if(productIndex > -1){
   cart[productIndex].inventory =quantity
 }
}