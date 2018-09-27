import { AuthGuardService } from './auth-guard.service';
import { NgModule } from "@angular/core";
import { RouterModule, CanActivate } from '@angular/router';

import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { ProductsComponent } from './products/products.component';

const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '' },
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    
    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
    { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
    
    { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService] },
    { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService] },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class RoutingModule { }