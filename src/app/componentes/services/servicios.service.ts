import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { detalletarea } from 'src/app/models/detalleTareas';
import { Tareas } from 'src/app/models/tareas';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService{

  private loginData: any;
  urlTareas= " http://localhost:3000/tareas";
  urlDetalleTarea= "http://localhost:3000/detalletarea";

  identificador:BehaviorSubject<any>= new BehaviorSubject<any>("identificador"); 

  get getObservable():Observable<any>{
    return this.identificador.asObservable();
  }

  set setOdservable(id:any){
    this.identificador.next(id);
  }

  setLoginData(data: any) {
    this.loginData = data;
  }

  getLoginData() {
    return this.loginData;
  }



  getTareas(): Observable<any> {
    return this.http.get<Tareas>(this.urlTareas);
  }

  getDetalleTareas(): Observable<any> {
    return this.http.get<detalletarea>(this.urlDetalleTarea);
  }



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

  nuevoPersonal(datos:any){
    return this.http.post<any[]>('http://localhost:3000/personal', datos);
  }

}

