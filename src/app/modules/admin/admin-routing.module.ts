import { NgModule } from '@angular/core';

import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //rutas secundarias
   {path:"admin", component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
