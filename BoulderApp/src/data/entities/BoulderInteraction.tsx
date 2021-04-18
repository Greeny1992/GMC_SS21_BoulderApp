export interface IBoulderInteraction {
  boulder_id:string,   
  user_id:string, 
  title: string,
  status:number,
  comment:string,
  created: Date,
  creator_id:string, //TODO remove
}
