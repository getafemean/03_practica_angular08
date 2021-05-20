import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

const routes: Routes = [
  {path: '', component: CrearProductoComponent},
  {path: 'crear-factura', component: CrearFacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
