import { IColor, IDifficulty,ILocation } from "../entities/boulderDetailValues";

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
    const id = typeof color_id === 'string'? parseInt(color_id) : color_id;
    const color = _colors.filter((color:IColor) => color.id === id )?.[0];
    return color ?? _colors[0];
}


const _difficulty :IDifficulty[] = [
    {id:-1, name:'none'},
    {id:1, name:'easy'},
    {id:2, name:'medium'},
    {id:3, name:'hard'}
]

export function difficulty(){
    return _difficulty
}
export function getDifficulty(difficulty_id:number|string):IDifficulty{
    const id = typeof difficulty_id === 'string'? parseInt(difficulty_id) : difficulty_id;
    const difficulty = _difficulty.filter((difficulty:IDifficulty) => difficulty.id === id )?.[0];
    return difficulty ?? difficulty[0];
}

const _location :ILocation[] = [
    {id:1, country:'Austria',region:'Styria'},
    {id:2, country:'Austria',region:'Carinthia'},
    {id:3, country:'Austria',region:'Vienna'},
    
]

export function location(){
    return _location
}
export function getLocation(location_id:number|string):ILocation{
    const id = typeof location_id === 'string'? parseInt(location_id) : location_id;
    const location = _location.filter((location:ILocation) => location.id === id )?.[0];
    return location ?? _location[0];
}
export function regions(){
    let regions=[]
    for (let location of _location){
        regions.push({
            id: location.id,
            name:location.region})
    }
    return regions
}
