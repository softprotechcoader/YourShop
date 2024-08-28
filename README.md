# YourShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



# Database Flow Diagram

## Components and Services:

1. **Login Component**
   - **Functions**: Registration, Login
   - **Data Handling**: Takes user data, saves to Local Storage, authorizes login
   - **Redirection**: On successful login, redirects to Layout Component

2. **Layout Component**
   - **Service Used**: Local Storage Service
   - **Child Components**: Home, Admin, Plan, Cart

3. **Home Component**
   - **Content**: Introduction and welcome message

4. **Admin Component**
   - **Responsibilities**: CRUD operations for Health Care plans
   - **Data Handling**: Stores data in Local Storage

5. **Plan Component**
   - **Responsibilities**: Displays list of plans, Add to Cart functionality
   - **Service Interaction**: Sends data to Cart Component using Cart Service

6. **Cart Component**
   - **Responsibilities**: Lists all items added to cart

## Services:

1. **Local Storage Service**
   - **Used By**: Login, Layout, Admin Components
   - **Functionality**: Data persistence for user and Health Care plans data

2. **Cart Service**
   - **Used By**: Plan and Cart Components
   - **Functionality**: 
     - `getData()`: Retrieve cart items
     - `removeItems()`: Remove specific items from cart
     - `emptyCart()`: Clear all items from cart
     - `shopMore()`: Redirects to Plan Component
     - `orderNow()`: Confirmation message for successful order
