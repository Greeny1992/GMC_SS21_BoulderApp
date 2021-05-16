export interface IBoulder{
        id:number,
        title:string,
        color: number,
        difficulty: number,
        location_id:number,
        like:boolean,
        lastChangeTimestamp:Date;
        lastEditor:string;
}
export type BoulderFormData = {
        title: string;
        color: number,
        difficulty: number,
        location_id:number,
        boulder_id:number;
        like:boolean;
        id:number;
        lastChangeTimestamp:Date;
        lastEditor:string;

}
export interface INewBoulder {
        creatorId:number,
        name:string,
        colour:number,
        difficulty: number,
        locationId: number
}
export interface IEditBoulder {
        userId:number,
        name:string,
        colour:number,
        difficulty: number,
        locationId: number,
        force:boolean,
        boulderId:number,
        lastChangeTimestamp?:Date ,
        lastEditor?:string,
}
export class Boulder implements IBoulder{
        id:number;
        title:string;
        color: number;
        difficulty: number;
        location_id:number;
        like:boolean;
        lastChangeTimestamp:Date;
        lastEditor:string;
        constructor(
                id:number,
                title:string,
                color: number,
                difficulty: number,
                location_id:number,
                like:boolean,
                lastChangeTimestamp:Date,
                lastEditor:string,
        ){
                this.id=id,
                this.title      =title;
                this.color      = color;
                this.difficulty = difficulty;
                this.location_id=location_id;
                this.like       =like;
                this.lastEditor = lastEditor
                this.lastChangeTimestamp= lastChangeTimestamp;
        }
        
}