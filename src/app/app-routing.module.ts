import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  // {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'user',loadChildren:() => 
       import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
   {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
