import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.router';
import { AuthRoutingModule } from './auth/auth.routing';

const route:Routes=[

  //path:'/dashboard', PageRouting
  //path:'/auth', AuthRouting,
  //path:'/medicos', MedicosRouting
  //path:'/compras', ComprasRouting
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component:NopagefoundComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route), PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
