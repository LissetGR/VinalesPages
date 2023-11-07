import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './Content/pagina-principal/pagina-principal.component';
import { HospedajesComponent } from './Content/hospedajes/hospedajes.component';
import { EntretenimientoComponent } from './Content/entretenimiento/entretenimiento.component';
import { RestaurantesComponent } from './Content/restaurantes/restaurantes.component';
import { BaresComponent } from './Content/bares/bares.component';

const routes: Routes = [
   { path: 'PaginaPrincipal' , component:PaginaPrincipalComponent},
   {path: '', pathMatch: 'full', redirectTo: 'PaginaPrincipal'},
   { path: 'Hospedajes' , component:HospedajesComponent},
   { path: 'Entretenimiento' , component:EntretenimientoComponent},
   { path: 'Restaurantes' , component:RestaurantesComponent},
   { path: 'Bares' , component:BaresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
