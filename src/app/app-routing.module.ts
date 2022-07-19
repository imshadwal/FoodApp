import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './loginmodal/modal.component';
import { SignupmodalComponent } from './signupmodal/signupmodal.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchItem', component:HomeComponent},
  {path:'Cart', component:CartComponent},
  {path:'Login', component:ModalComponent},
  {path:'Sign-Up', component:SignupmodalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
