import { CommonModule } from '@angular/common';
import { CartserviceService } from './../cartservice.service';
import { LocalstorageService } from './../localstorage.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule , RouterOutlet , CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{

  signUpArray: any;
  constructor(private router: Router, private CartserviceService:CartserviceService)
   { 
      //fetch data from local storage key signupArray 
     const storedData = localStorage.getItem('signUpArray');
        if (storedData) {
          this.signUpArray = JSON.parse(storedData);
        }

      
 
   }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.CartserviceService.getCartArray()

  }

  //create function to SignOut and navigate to the login page
  signOut(){
    localStorage.removeItem('signupArray');
    window.location.href = '/login';
  }
}
  
