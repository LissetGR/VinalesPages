import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospedaje } from '../Object/hospedaje';



@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  
  private url:string= "http://localhost:3000/"

  constructor(private http:HttpClient) { }
   
  public getHospedajes(){
    return this.http.get<Hospedaje[]>(this.url+"Hospedajes")
  }
  
  public getRevisado(id_hospedaje:number){
    return this.http.get<boolean>(this.url+"revisarCapacidades/"+ id_hospedaje)
  }

  public getBusquedaHospedajes(nombreABuscar:string, estrellasABuscar:number){
    return this.http.get<Hospedaje[]>(this.url+"Busqueda/"+ nombreABuscar + '/' + estrellasABuscar)
  }
}
