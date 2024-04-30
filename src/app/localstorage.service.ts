import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  // create a function to get the data from local storage key products
  getProducts(): any {


    return JSON.parse(localStorage.getItem('products') || '[]');
  }

}
