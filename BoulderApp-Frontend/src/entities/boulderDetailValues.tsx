
export interface IBasic {
    id:number,
    name: string
}
interface IColor extends IBasic {
    value: string
}

interface IDifficulty extends IBasic {
}


const _colors: IColor[]=[
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
export function colors(){
        return _colors
}
    export function getColor(color_id:number|string):IColor{
        console.log("COLOR_ID: " +color_id)
        const id = typeof color_id === 'string'? parseInt(color_id) : color_id;
        const color = _colors.filter((color:IColor) => color.id === id )?.[0];
        console.log("COLOR: " +color)
        console.log("value: " +color.value)
        return color ?? _colors[0];
    }


const _difficulty :IDifficulty[] = [
        {id:-1, name:'none'},
        {id:1, name:'easy'},
        {id:2, name:'medium'},
        {id:3, name:'hard'},
        {id:4, name:'none'},
        {id:5, name:'none'},
        {id:6, name:'none'},
        {id:7, name:'none'}
    ]

export function difficulty(){
        return _difficulty
    }
export function getDifficulty(difficulty_id:number|string):IDifficulty{
        const id = typeof difficulty_id === 'string'? parseInt(difficulty_id) : difficulty_id;
        const difficulty = _difficulty.filter((difficulty:IDifficulty) => difficulty.id === id )?.[0];
        return difficulty ?? difficulty[0];
    }
