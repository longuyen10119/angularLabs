import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path:'Login', component:LoginComponent},
  {path:'Account', component:AccountComponent},
  {path:'Info', component:InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
