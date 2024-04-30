import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newproduct.component.html',
  styleUrl: './newproduct.component.css'
})
export class NewproductComponent implements OnInit{

  productObj: Products = new Products ();
  
  
  //initialize the products array
  products: Products[] = [];

  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    //get the products from the local storage and store it in the products array
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
  }

  //create a function to open and close the modal
  openModal() {
    let modal = document.getElementById('myModal');
    if(modal!=null)
    modal.style.display = "block";
  }

  closeModal() {
    let modal = document.getElementById('myModal');
    if(modal!=null)
    modal.style.display = "none";
  }

  //create a function name saveProduct to save the product to the local storage and push the product to the products array and close the modal also clear the input fields and check for duplicate product also alert user when product is added
  saveProduct() {
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    if (products.length > 0) {
      // Find the maximum product ID
      let maxId = Math.max(...products.map((product: Products) => product.id));
      this.productObj.id = maxId + 1;
    } else {
      this.productObj.id = 1;
    }

    if (products.some((product: Products) => product.id === this.productObj.id)) {
      alert('Product already exists');
      return;
    }

    products.push(this.productObj);
    localStorage.setItem('products', JSON.stringify(products));
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
    this.productObj = new Products();
    this.closeModal();
  }

  //create a function to delete the product from the local storage and also from the products array
  deleteProduct(product: any) {
    const confirmation = confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      let products = JSON.parse(localStorage.getItem('products') || '[]');
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == product.id) {
          products.splice(i, 1);
          break;
        }
      }
      localStorage.setItem('products', JSON.stringify(products));
      this.products = JSON.parse(localStorage.getItem('products') || '[]');
    }
  }

  //create a function to edit the product and update the product in the local storage and also in the products array
  editProduct(product: any) {
    this.productObj = product;
    this.openModal();
  }

  //create a function to update the product in the local storage and also in the products array
  updateProduct() {
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == this.productObj.id) {
        products[i].name = this.productObj.name;
        products[i].price = this.productObj.price;
        products[i].description = this.productObj.description;
        break;
      }
    }
    localStorage.setItem('products', JSON.stringify(products));
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
    this.productObj = new Products();
    this.closeModal();
  }




}







//create a class Products and define the properties of the product
export class Products {
  id: number;
  name: string;
  price: string;
  description: string;
  //image: string;
 // quantity: number;
  constructor() {
    this.id = 0;
    this.name = '';
    this.price = '';
    this.description = '';
   // this.image = image;
   // this.quantity = 0;
  }
}
