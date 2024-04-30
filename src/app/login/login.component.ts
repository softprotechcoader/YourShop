import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutletContext, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , RouterModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    //fetch data from local storage
    const storedData = localStorage.getItem('signUpArray');
    if (storedData) {
      this.signUpArray = JSON.parse(storedData);
    }
    
  }
  constructor(private router: Router) { }

  //create a SignUp Object
  signUp: any = {
    userId: '',
    email: '',
    password: '',
    
  };

  //create an array to store the signUp objects
  signUpArray: any = [];

  onsignUp(): void {
    // Store data to local storage
    this.signUpArray.push(this.signUp);
    localStorage.setItem('signUpArray', JSON.stringify(this.signUpArray));
    alert('Registration successful');
  }

  //create a SignIn Object
  signIn: any = {
    userId: '',
    password: '',
  };

  //create a function to SignInc
  onsignIn(): void {
    // Validate signIn object
    if (this.signIn.userId && this.signIn.password) {
      // Fetch data from local storage
      const storedData = localStorage.getItem('signUpArray');
      if (storedData) {
        this.signUpArray = JSON.parse(storedData);
        // Check if userId exists
        const isUserExists = this.signUpArray.some((item: any) => item.userId === this.signIn.userId);
        if (isUserExists) {
          // Check if password is correct
          const isPasswordMatch = this.signUpArray.some((item: any) => item.password === this.signIn.password);
          if (isPasswordMatch) {
            alert('Login successful');
            // this.router.navigateByUrl('/dasboard');
            this.router.navigate(['/layout/home']); // Navigate to the layout component
          } else {
            alert('Incorrect password');
          }
        } else {
          alert('User not found');
        }
      } else {
        alert('No user registered');
      }
    } else {
      alert('Invalid signIn object');
    }
  }

}

  



