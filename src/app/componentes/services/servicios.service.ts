import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService{
  urlEntidades= "http://localhost:3000/entidadFinanciera";

  identificador:BehaviorSubject<any>= new BehaviorSubject<any>("identificador"); 

  get getObservable():Observable<any>{
    return this.identificador.asObservable();
  }

  set setOdservable(id:any){
    this.identificador.next(id);
  }

  /*getEntidades(): Observable<any> {
    return this.http.get<Entidad>(this.urlEntidades);
  }*/



  constructor(private http: HttpClient) { }


  login(username: string, password: string) {
    return this.http.get<any[]>('http://localhost:3000/personal');
  }

  proyecto(id:any){
    return this.http.get<any[]>('http://localhost:3000/proyectos');
  }

  personal(id:any){
    return this.http.get<any[]>('http://localhost:3000/personal');
  }

  tarea(id:any){
    return this.http.get<any[]>('http://localhost:3000/tareas');
  }
  

}

