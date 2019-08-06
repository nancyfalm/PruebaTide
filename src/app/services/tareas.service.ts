import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TareaModel } from '../models/tarea.Model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private url = "http://front-test.tide.mx/api";


  constructor( private http: HttpClient) { }

  crearTarea( tarea: TareaModel) {
    return this.http.post(`${ this.url }/tasks.json` , tarea)
    .pipe(
      map( (resp : any) => {
        return tarea;
      })
    );
  }

  actualizarTarea( tarea: TareaModel ) {
    const tareaTemporal = {
      ...tarea
    };
    delete tareaTemporal.id;
    return this.http.put(` ${ this.url }/tasks/${ tarea.id}`, tarea);
  }

  getTareas(){
    return this.http.get(` ${this.url}/tasks.json`)
    .pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo ( tareasObj: object) {
    const tareas: TareaModel[] = [];

    Object.keys( tareasObj ).forEach( key => {
      const task: TareaModel = tareasObj[key];
      let taskId = task.id.toString();
      taskId = key;
      tareas.push( task );

    });
    return tareas;
  }

  getTarea ( id: string) {
    return this.http.get(`${ this.url }/tasks/${ id }`);
  }

  eliminarTarea( id: number) {

    return this.http.delete(`${ this.url }/tasks/${ id }`);

  }
}
