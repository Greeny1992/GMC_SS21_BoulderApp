import { act } from "react-test-renderer";
import { Guid } from "../../utils/CreateGuid";

export interface IBoulderInteraction {
  boulder_id:number,   
  user_id:number, 
  title: string,
  status:number,
  comment:string,
  created: Date,
  id?:string
}

export interface INewBoulderInteraction{
  boulderId:number, 
  userId:number,
  title:string, 
  comment:string, 
  status:number

}
export interface IUpdateBoulderInteraction extends INewBoulderInteraction{
  interactionId:number
}
export type BoulderInteractionFormData = {
  id:string;
  title: string;
  comment: string;
  status:number;
  boulder_id:string;
  user_id:string;
};
export class BoulderInteraction implements IBoulderInteraction{
  boulder_id: number;
  user_id: number;
  userName:string;
  title: string;
  status: number;
  comment: string;
  created: Date;
  id: string;
  constructor(boulder_id:number, user_id:number,userName:string, title:string ='',status:number=1,comment:string='',created:Date =new Date(),id:string =''){
    this.boulder_id = boulder_id;
    this.user_id    = user_id;
    this.userName   = userName;
    this.title      = title;
    this.status     = status;
    this.comment    = comment;
    this.created    = created;
    this.id         = id;
  }
  isEqual(action:IBoulderInteraction):boolean {
    return this.user_id === action.user_id && this.boulder_id === action.boulder_id && this.created === action.created
  }

  
}