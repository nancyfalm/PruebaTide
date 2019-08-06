import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { TareaModel } from 'src/app/models/tarea.Model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  allTasks: TareaModel[] = [];

  constructor( private tareasService: TareasService) { }

  ngOnInit() {

    this.tareasService.getTareas()
    .subscribe( resp => this.allTasks = resp);
  }

  eliminarTarea( tarea: TareaModel, i: number) {
    this.allTasks.splice(i , 1);
    this.tareasService.eliminarTarea( tarea.id).subscribe();
  }

}
