import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }

  //create an array to store the cart objects
  cartArray: any = [];

  //create a function to add to cart 
  onAddToCart(product: any): void {
    this.cartArray.push(product);
    alert('Your product has been added to the cart!');
  }

  //create a function to get the total price of the products in the cart
  getTotalPrice(): any {
    let totalPrice = 0;
    for (let i = 0; i < this.cartArray.length; i++) {
      totalPrice += this.cartArray[i].quantity * this.cartArray[i].price;
    }
    return totalPrice;
  }

  //create a function to remove the product from the cart
  onRemoveFromCart(product: any): void {
    for (let i = 0; i < this.cartArray.length; i++) {
      if (this.cartArray[i].productId === product.productId) {
        if (this.cartArray[i].quantity > 1) {
          this.cartArray[i].quantity--;
        } else {
          this.cartArray.splice(i, 1);
        }
        break;
      }
    }
    this.getTotalPrice();
  }

  //create a function to clear the cart and remove all the products from the cart
  onClearCart(): void {
    this.cartArray = [];
    this.getTotalPrice();
    return this.cartArray;
    
  }

  // onClearCart(): void {
  //   this.cartArray = [];
  //   this.getTotalPrice();
  // }

  //create a function to get the cart array
  getCartArray(): any {
    return this.cartArray;
    
     
  }

}
