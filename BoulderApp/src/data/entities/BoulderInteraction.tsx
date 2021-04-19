import { act } from "react-test-renderer";

export interface IBoulderInteraction {
  boulder_id:string,   
  user_id:string, 
  title: string,
  status:number,
  comment:string,
  created: Date,
}

export class BoulderInteraction implements IBoulderInteraction{
  boulder_id: string;
  user_id: string;
  title: string;
  status: number;
  comment: string;
  created: Date;
  constructor(boulder_id:string, user_id:string,created:Date =new Date(), title:string ='',status:number=1,comment:string=''){
    this.boulder_id = boulder_id;
    this.user_id    = user_id;
    this.title      = title;
    this.status     = status;
    this.comment    = comment;
    this.created    = created;
  }
  isEqual(action:IBoulderInteraction):boolean {
    return this.user_id === action.user_id && this.boulder_id === action.boulder_id && this.created === action.created
  }

  
}