import { IStatus } from "../entities/BoulderInteractionValues";

const _status :IStatus[] = [
    {id:1, name:'idea',icon:'lightbulb'},
    {id:2, name:'tried',icon:'looks-one'},
    {id:3, name:'training for',icon:'construction'},
    {id:4, name:'topped',icon:'emoji-events'},
]

export function getAllStatus(){
    return _status
}
export function getStatus(status_id:number|string):IStatus{
    const id = typeof status_id === 'string'? parseInt(status_id) : status_id;
    const status = _status.filter((status:IStatus) => status.id === id )?.[0];
    return status ?? _status[0];
}
