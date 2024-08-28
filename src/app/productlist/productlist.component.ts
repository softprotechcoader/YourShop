import { CartserviceService } from './../cartservice.service';
import { LocalstorageService } from './../localstorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {

  //create an array to store the products
  products: any = [];

  //create a function to get the products from the local storage and store it in the products array
  constructor(private LocalstorageService: LocalstorageService, private CartserviceService: CartserviceService) {
    //this.products = JSON.parse(localStorage.getItem('products'));
  }

  //create a function to add the product to the cart and call the function onAddToCart from the cart service and pass the product

  ngOnInit(): void {
    //get the data from the LocalstorageService 
    this.products = this.LocalstorageService.getProducts();
  }

  //create a function to add the product to the cart and call the function onAddToCart from the cart service and pass the product check for duplicate product and alart user
  addToCart(product: any) {
    if (this.CartserviceService.cartArray.length > 0) {
      for (let i = 0; i < this.CartserviceService.cartArray.length; i++) {
        if (this.CartserviceService.cartArray[i].id == product.id) {
          alert('Product already in the cart');
          return;
        }
      }
    }
    this.CartserviceService.onAddToCart(product);
  }
}
