import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';

import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"manage-products",component:ProductsComponent},
  {path:"addproducts",component:AddProductsComponent},
  {path:"edit",component:EditComponent},
  {path:"",redirectTo:"/dashboard",pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
