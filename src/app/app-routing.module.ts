import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from './forms/forms.module';

const routes: Routes = [
  {
   path:'reactive',
   loadChildren:()=>import('./forms/forms.module')
   .then(m=>m.FormsModule),
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module')
    .then(m=>m.AuthModule),
  },
  {
    path:'**',
    redirectTo:'reactive'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
