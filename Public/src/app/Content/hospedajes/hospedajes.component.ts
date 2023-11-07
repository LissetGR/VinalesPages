import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Hospedaje } from 'src/app/Object/hospedaje';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-hospedajes',
  templateUrl: './hospedajes.component.html',
  styleUrls: ['./hospedajes.component.css']
})
export class HospedajesComponent {
  
  hospedajes:Hospedaje[]=[]
  disponible:boolean=false
  nombreABuscar:string=''
  estrellasABuscar:number=0
  cantidadResultados=0
  banderaBusqueda=false
  vacia=true;

  auxiliar:Hospedaje = {
    id_hospedaje:0,
    nombre_hospedaje:' ',
    direccion:' ',
    capacidades:0,
    precio_noche:0,
    calificacion:0,
    nombre_imagen:' ',
    disponible:0
  }

  constructor(private servicio:ServicioService, private cliente:HttpClient,private message: NzMessageService){ 

    this.servicio.getHospedajes().subscribe(
      (response)=>{
        this.hospedajes=response
      },
      (error)=>{
        this.createMessage('error','Error al cargar')
      }
    )
  }
    
  public  buscarHospedajes(){

    if(this.nombreABuscar.length==0 && this.estrellasABuscar==0){ 
       this.createMessage('warning','Usted no ha ingresado datos para la búsqueda')
    } 
    else{
      
        if(this.nombreABuscar.length==0){
          this.nombreABuscar=' '
        }

        this.servicio.getBusquedaHospedajes(this.nombreABuscar,this.estrellasABuscar).subscribe(
        (response)=>{
          this.hospedajes=response  
          this.cantidadResultados=this.hospedajes.length
          this.banderaBusqueda=true
          this.createMessage('success','Su búsqueda se ha realizado exitosamente')
        },
        (error)=>{ 
          this.createMessage('error','No se han encontrado resultados con esos datos')
          this.virarAtrasBusqueda()
        }
      )
    }

  }
  
  public virarAtrasBusqueda(){
    this.servicio.getHospedajes().subscribe(
      (response=>{
        this.hospedajes=response
        this.banderaBusqueda=false
        this.nombreABuscar=''
        this.estrellasABuscar=0
        this.cantidadResultados=0
        this.vacia=false
      }),
      (error=>{
        this.createMessage('error','Error al volver')
      })
    )
  }

  createMessage(type: string, contenido: string): void {
    this.message.create(type, contenido);
  }

}
