export interface IBoulder{
        id:string,
        title:string,
        color: number,
        difficulty: number,
        img:string,
        location_id:string,
        created:Date,
        creator_id:string,
        like:boolean,
        topped?:boolean
}
export type BoulderFormData = {
        title: string;
        color: number,
        difficulty: number,
        img:string,
        location_id:string,
        boulder_id:string;
        topped:boolean;
        like:boolean;
        id:string;
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
        locationId: number
}
export class Boulder implements IBoulder{
        id:string;
        title:string;
        color: number;
        difficulty: number;
        img:string;
        location_id:string;
        created:Date;
        creator_id:string;
        like:boolean;
        topped?:boolean;
        constructor(
                id:string,
                title:string,
                color: number,
                difficulty: number,
                img:string,
                location_id:string,
                created:Date,
                creator_id:string,
                like:boolean,
                topped?:boolean
        ){
                this.id=id,
                this.title      =title;
                this.color      = color;
                this.difficulty = difficulty;
                this.img        =img;
                this.location_id=location_id;
                this.created    =created,
                this.creator_id =creator_id;
                this.like       =like;
                this.topped    =topped ?? false;
        }
        
}