export interface ILocation {
    id:string,
    country:string,
    region:string,
}
export interface ILocationFilterValues {
    countries:string[],
    region:string[],
    cities:string[]
}