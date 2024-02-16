import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TutoListComponent} from "./components/tuto-list/tuto-list.component";
import {AddTutoComponent} from "./components/add-tuto/add-tuto.component";
import {TutoDetailsComponent} from "./components/tuto-details/tuto-details.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
    {path:"", redirectTo:"list", pathMatch:"full" },
    {path:"login" ,component: LoginComponent},
    {path:"register" ,component: RegisterComponent },
  {path:"list", component:TutoListComponent , canActivate:[AuthGuardGuard]},
  {path:"add", component:AddTutoComponent , canActivate:[AuthGuardGuard]},
  {path:"tuto/:id", component:TutoDetailsComponent , canActivate:[AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
