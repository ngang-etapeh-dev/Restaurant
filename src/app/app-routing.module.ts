import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'auth', 
    pathMatch: 'full' 
  },
  { 
    path: 'auth', 
    loadChildren: './auth/auth-routing.module#AuthRoutingModule' 
  },
  { 
    path: 'admin', 
    loadChildren: './admin/admin-routing.module#AdminRoutingModule'  
  },
  { 
    path: 'user', 
    loadChildren: './user/user-routing.module#UserRoutingModule'  
  },
  { 
    path: '**', 
    redirectTo: 'auth' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
