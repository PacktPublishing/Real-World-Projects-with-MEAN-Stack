import { Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OrderComponent } from './order/order.component';

export const APP_ROUTES: Routes = [
  { path: 'products', component:  ProductlistComponent},
  { path: 'orders', component:  OrderComponent},
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];
