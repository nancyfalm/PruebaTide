import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.Model';
import { NgForm } from '@angular/forms';
import { TareasService } from 'src/app/services/tareas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tarea = new TareaModel();

  constructor( private tareasService: TareasService ,
               private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if( id !== 'nuevo' ){

      this.tareasService.getTarea( id )
      .subscribe( (resp: TareaModel) => {
        this.tarea = resp;
        this.tarea.id = + this.tarea.id;
      })
    }
  }
  
  guardarTarea( form: NgForm){

    if( this.tarea ) {
      this.tareasService.actualizarTarea(this.tarea).subscribe(resp => {
        alert("se actualizo el registro");
      });
    }else {
      this.tareasService.crearTarea(this.tarea).subscribe(resp => {
        this.tarea = resp;
        alert("se creo un nuevo registro");
      });
    }
  }

  

}
