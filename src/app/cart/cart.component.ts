import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  constructor(private CartserviceService:CartserviceService ) { }
  Product = this.CartserviceService.getCartArray();
  ngOnInit(): void {
   
   // throw new Error('Method not implemented.');
  //get the products form cart service
  //this.CartserviceService.getCartArray();

     
  }

  //create a function to remove the product from the cart and call the function onRemoveFromCart from the cart service and pass the product
  removeFromCart(product: any) {
    this.CartserviceService.onRemoveFromCart(product);
  }

  //create a function to clear the cart and call the function onClearCart from the cart service
  clearCart() {
    this.CartserviceService.onClearCart();
    window.location.reload();
  }

  //create a function to get the total price of the products in the cart and call the function getTotalPrice from the cart service
  getTotalPrice() {
    return this.CartserviceService.getTotalPrice();
  }

  //create a function name OrederNow to alert the user as "Order placed successfully" and clear the cart
  OrderNow() {
    alert('Order placed successfully');
    this.CartserviceService.onClearCart();
    window.location.reload();
    
  }

}
