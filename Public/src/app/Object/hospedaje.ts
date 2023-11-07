export interface Hospedaje{
   id_hospedaje:number,
   nombre_hospedaje:string,
   capacidades:number,
   direccion:string,
   precio_noche:number,
   calificacion:number,
   id_propietaria?:number
   nombre_imagen:string
   disponible:number
}