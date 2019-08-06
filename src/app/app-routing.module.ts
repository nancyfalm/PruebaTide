import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasComponent } from './pages/tareas/tareas.component';
import { TareaComponent } from './pages/tarea/tarea.component';


const routes: Routes = [
  {path: 'tareas', component:TareasComponent},
  {path: 'tarea/:id', component:TareaComponent},
  {path: ' ', component:TareasComponent}
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }
