
export interface IBasic {
    id:number,
    name: string
}
export interface IColor extends IBasic {
    value: string
}

export interface IDifficulty extends IBasic {
}

export interface ILocation {
    id:number,
    country:string,
    region:string
}
