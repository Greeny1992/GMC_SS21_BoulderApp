
interface IBasic {
    id:number,
    name: string
}
interface IColor extends IBasic {
    value: string
}
interface IStatus extends IBasic {
    id: number,
    name: string,
    icon: string
}
interface IDifficulty extends IBasic {
}



export default class BoulderDetailValues {
    private _colors: IColor[]=[
        {id:-1, name:'none',value:'#ffffff'},
        {id:1, name:'green',value:'#008000'},
        {id:2, name:'yellow',value:'#ffd700'},
        {id:3, name:'red',value:'#ff0000'},
        {id:4, name:'orange',value:'#FFA500'},
        {id:5, name:'pink',value:'#FFC0CB'},
        {id:6, name:'blue',value:'#0000ff'},
        {id:7, name:'violet',value:'##EE82EE'},
        {id:8, name:'turquoise',value:'##40E0D0'},
        {id:9, name:'white',value:'#ffffff'},
        {id:10, name:'grey',value:'#808080'},
        {id:11, name:'black',value:'#ffd700'}
    ]
    public get colors(){
        return this._colors
    }
    public getColor(color_id:number|string):IColor{
        console.log("COLOR_ID: " +color_id)
        const id = typeof color_id === 'string'? parseInt(color_id) : color_id;
        const color = this._colors.filter((color:IColor) => color.id === id )?.[0];
        console.log("COLOR: " +color)
        console.log("value: " +color.value)
        return color ?? this._colors[0];
    }

    private _status :IStatus[] = [
        {id:-1, name:'none',icon:'circle-outline'},
        {id:1, name:'idea',icon:'circle-outline'},
        {id:2, name:'tried',icon:'circle-slice-1'},
        {id:3, name:'training for',icon:'circle-slice-6'},
        {id:4, name:'topped',icon:'circle-slice-8'},
    ]

    public get status(){
        return this._status
    }
    public getStatus(status_id:number|string):IStatus{
        const id = typeof status_id === 'string'? parseInt(status_id) : status_id;
        const status = this._status.filter((status:IStatus) => status.id === id )?.[0];
        return status ?? this._status[0];
    }

    private _difficulty :IDifficulty[] = [
        {id:-1, name:'none'},
        {id:1, name:'easy'},
        {id:2, name:'medium'},
        {id:3, name:'hard'},
        {id:4, name:'none'},
        {id:5, name:'none'},
        {id:6, name:'none'},
        {id:7, name:'none'}
    ]

    public get difficulty(){
        return this._difficulty
    }
    public getDifficulty(difficulty_id:number|string):IDifficulty{
        const id = typeof difficulty_id === 'string'? parseInt(difficulty_id) : difficulty_id;
        const difficulty = this._difficulty.filter((difficulty:IDifficulty) => difficulty.id === id )?.[0];
        return difficulty ?? this.difficulty[0];
    }
}