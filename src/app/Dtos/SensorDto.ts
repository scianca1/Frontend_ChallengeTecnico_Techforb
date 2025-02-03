export class SensorDto{
     

     constructor(private id:number,
                 private nombre:string,
                 private imagenUrl:string,
                 private nroLecturasOK:number,
                 private nroAlertasMedias:number,
                 private nroAlertasRojas:number){}

getNombre():string{
    return this.nombre;
}
getImagenUrl():string{
    return this.imagenUrl;
}
getNroAlertasMedias():number{
    return this.nroAlertasMedias;
}
getNroLecturasOK():number{
    return this.nroLecturasOK;
}
getNroAlertasRojas():number{
    return this.nroAlertasRojas;
}
getId():number{
    return this.id;
}



}