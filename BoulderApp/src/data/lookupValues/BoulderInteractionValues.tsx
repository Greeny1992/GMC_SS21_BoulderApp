import { IStatus } from "../entities/BoulderInteractionValues";

const _status :IStatus[] = [
    {id:-1, name:'none',icon:'circle-outline'},
    {id:1, name:'idea',icon:'circle-outline'},
    {id:2, name:'tried',icon:'circle-slice-1'},
    {id:3, name:'training for',icon:'circle-slice-6'},
    {id:4, name:'topped',icon:'circle-slice-8'},
]

export function status(){
    return _status
}
export function getStatus(status_id:number|string):IStatus{
    const id = typeof status_id === 'string'? parseInt(status_id) : status_id;
    const status = _status.filter((status:IStatus) => status.id === id )?.[0];
    return status ?? _status[0];
}
