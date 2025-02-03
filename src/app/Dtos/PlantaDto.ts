export class PlantaDto{

    constructor(public readonly id:number,
                public readonly pais:string,
                public readonly nombrePlanta:string,
                public readonly lecturasOk:number,
                public readonly alertasMadias:number,
                public readonly alertasRojas:number,
                public readonly imgBanderaUrl:string){}
}