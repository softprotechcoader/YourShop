import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { DasboardComponent } from './dasboard/dasboard.component';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
    {path:'layout',component:LayoutComponent,
        children:[
            {path:'newproduct',component:NewproductComponent},
            {path:'cart',component:CartComponent},
            {path:'home',component:HomeComponent},
            {path:'productlist',component:ProductlistComponent},
            {path: 'dasboard',component:DasboardComponent}
        ]
    },
    // { path: '**', redirectTo: 'login' }

];
