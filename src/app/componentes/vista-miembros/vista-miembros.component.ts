import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/models/tareas';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-vista-miembros',
  templateUrl: './vista-miembros.component.html',
  styleUrls: ['./vista-miembros.component.css']
})
export class VistaMiembrosComponent implements OnInit{

  tareas: Tareas[];

  formModal:any;
  formModalNuevo:any;

  constructor(private service: ServiciosService){}
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    this.formModalNuevo= new window.bootstrap.Modal(
      document.getElementById('modalNuevo')
    );
    this.service.getEntidades()
    .subscribe(data =>{
      this.entidades= data;
    })

  }
  
  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }

  openModalNuevo(){
    this.formModalNuevo.show();
    this.formModal.hide();
  }

  closeNuevo(){
    this.formModalNuevo.hide();
    this.formModal.show();
  }
}
